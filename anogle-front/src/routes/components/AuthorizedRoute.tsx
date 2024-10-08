import { useEffect } from "react";
import { Stack } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { SideMenuBar } from "../../components";

function AuthorizedRoute() {
  const navigator = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     navigator("/sign-in");
  //   }
  // });

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
