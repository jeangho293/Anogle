import { Stack } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";
import { SideMenuBar } from "../../components";

function AuthorizedRoute() {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <Stack direction="row">
      <Stack css={{ width: "100%", maxWidth: "240px" }}>
        <SideMenuBar />
      </Stack>
      <Outlet />
    </Stack>
  );
}

export { AuthorizedRoute };
