import { Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { SideMenuBar } from "../../components";
import { useUser } from "../../libs";

function AuthorizedRoute() {
  const [user] = useUser();

  return !user ? (
    <Navigate to="/sign-in" />
  ) : (
    <Stack direction="row">
      <Stack css={{ width: "100%", maxWidth: "240px" }}>
        <SideMenuBar />
      </Stack>
      <Outlet />
    </Stack>
  );
}

export { AuthorizedRoute };
