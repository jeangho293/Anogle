import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { HomeScreen, SignInScreen } from "../screens";
import { Header } from "../components";
import { ReactNode } from "react";

function SimpleLayout(props: { children: ReactNode }) {
  const { children } = props;
  return (
    <Stack>
      <Header />
      <Stack css={{ height: "100%" }}>{children}</Stack>
    </Stack>
  );
}

function AuthorizedRoute() {
  const token = localStorage.getItem("token");

  return (
    <SimpleLayout>
      <Outlet />
    </SimpleLayout>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthorizedRoute />}>
          <Route index element={<HomeScreen />} />
          <Route path="/sign-in" element={<SignInScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
