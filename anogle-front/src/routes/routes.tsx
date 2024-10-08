import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthorizedRoute, UnAuthorizedRoute } from "./components";
import {
  SignInScreen,
  HomeScreen,
  SignUpScreen,
  DashboardScreen,
} from "../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authorization */}
        <Route element={<AuthorizedRoute />}>
          <Route index element={<HomeScreen />} />
          <Route path="dashboard" element={<DashboardScreen />} />
        </Route>

        {/* UnAuthorization */}
        <Route element={<UnAuthorizedRoute />}>
          <Route path="/sign-in" element={<SignInScreen />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
