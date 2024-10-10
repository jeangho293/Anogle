import { Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { SideMenuBar } from "../../components";
import { useUser } from "../../libs";

function AuthorizedRoute() {
  const [user] = useUser();

  console.log(user);

  return !user ? (
    <Navigate to="/sign-in" />
  ) : (
    <Stack direction="row">
      <SideMenuBar />

      <Stack css={{ width: "100%", height: "100vh" }}>
        <Outlet />
      </Stack>
    </Stack>
  );
}

export { AuthorizedRoute };
