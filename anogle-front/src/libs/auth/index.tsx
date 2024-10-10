import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { UserModel } from "../../models/user-model";
import { httpClient } from "../http-client";
import { CircularProgress } from "@mui/material";

const authClient = httpClient;

const UserContext = createContext<{
  getUser: () => UserModel | undefined;
  setUser: (user?: UserModel) => void;
}>({
  getUser() {
    return undefined;
  },
  setUser() {},
});

async function loadToken(query: () => Promise<{ token: string }>) {
  const { token } = await query();

  if (token) {
    authClient.setAuthorization(token);
    localStorage.setItem("token", token);
  }

  return !!token;
}

async function unloadToken() {
  httpClient.resetAuthorization();
  localStorage.removeItem("token");
}

export function AuthProvider({
  user: initialUser,
  children,
}: {
  user?: UserModel;
  children: ReactNode;
}) {
  const [initialized, setInitialized] = useState(!!initialUser);
  const [user, setUser] = useState<UserModel | undefined>(initialUser);

  const userContext = useMemo(
    () => ({
      getUser() {
        return user;
      },
      setUser(user?: UserModel) {
        setUser(user);
      },
    }),
    [user, setUser]
  );

  useEffect(() => {
    if (!initialized) {
      loadToken(() =>
        Promise.resolve({ token: localStorage.getItem("token") || "" })
      )
        .then(async (isToken) => {
          if (isToken) {
            setUser(await getSelf());
          }
        })
        .finally(() => setInitialized(true));
    }
  }, [initialized]);

  if (!initialized) {
    return <CircularProgress />;
  }

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
}

async function getSelf() {
  return authClient.get<UserModel>("/users/self");
}

export function useUser() {
  const context = useContext(UserContext);

  const user = context.getUser();

  return [user!];
}

export function useSignIn(): [
  ({ email, password }: { email: string; password: string }) => void,
  { loading: boolean }
] {
  const [loading, setLoading] = useState(false);
  const context = useContext(UserContext);

  return [
    useCallback(
      ({ email, password }: { email: string; password: string }) => {
        setLoading(true);
        loadToken(() =>
          authClient.post<{ token: string }>("/users/sign-in", {
            email,
            password,
          })
        )
          .then(async () => {
            context.setUser(await getSelf());
          })
          .finally(() => setLoading(false));
      },
      [context]
    ),
    { loading },
  ];
}

export function useSignOut() {
  return useCallback(() => {
    unloadToken().then(() => window.location.reload());
  }, []);
}
