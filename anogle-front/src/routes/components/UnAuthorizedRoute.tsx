import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function UnAuthorizedRoute() {
  return (
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
