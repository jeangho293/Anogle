import { createContext, ReactNode, useState, useMemo } from "react";
import { UserModel } from "../../models";

const UserContext = createContext<{
  getUser: () => UserModel | undefined;
  setUser: (user?: UserModel) => void;
}>({
  getUser() {
    return undefined;
  },
  setUser() {},
});

function AuthProvider({
  user: initUser,
  children,
}: {
  user: UserModel;
  children: ReactNode;
}) {
  const [initialized, setInitialized] = useState(!!initUser);
  const [user, setUser] = useState<UserModel | undefined>(initUser);

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

export { AuthProvider };
