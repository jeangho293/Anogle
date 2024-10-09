import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { UserModel } from "../../models/user-model";

const UserContext = createContext<{
  getUser: () => UserModel | undefined;
  setUser: (user: UserModel) => void;
}>({
  getUser() {
    return undefined;
  },
  setUser() {},
});

function AuthProvider({
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

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
}

function useUser<T extends boolean = false>(options?: {
  canBeUnauthenticated: T;
}) {
  const canBeUnauthenticated = options?.canBeUnauthenticated ?? false;

  const context = useContext(UserContext);
  const user = context.getUser();

  if (!user && !canBeUnauthenticated) {
    throw new Error("Not authenticated");
  }

  return [user!];
}

export { AuthProvider, useUser };
