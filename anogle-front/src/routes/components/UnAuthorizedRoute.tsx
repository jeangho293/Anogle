import { Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../libs";

function UnAuthorizedRoute() {
  const [user] = useUser();

  return user ? (
    <Navigate to="../dashboard" relative="path" replace />
  ) : (
    <Stack
      css={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Outlet />
    </Stack>
  );
}

export { UnAuthorizedRoute };
