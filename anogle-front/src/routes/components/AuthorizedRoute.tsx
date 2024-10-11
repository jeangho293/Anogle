import { Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../libs";
import { Header } from "../../components";

function AuthorizedRoute() {
  const [user] = useUser();

  return !user ? (
    <Navigate to="/sign-in" />
  ) : (
    <Stack css={{ height: "100%" }}>
      <Header />
      <Stack css={{ width: "100%", overflow: "hidden" }}>
        <Outlet />
      </Stack>
    </Stack>
  );
}

export { AuthorizedRoute };
