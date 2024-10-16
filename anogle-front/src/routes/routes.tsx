import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthorizedRoute, UnAuthorizedRoute } from "./components";
import {
  SignInScreen,
  HomeScreen,
  SignUpScreen,
  DashboardScreen,
  KaKaoLoginScreen,
  GoogleLoginScreen,
} from "../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authorization */}
        <Route element={<AuthorizedRoute />}>
          <Route index element={<HomeScreen />} />
          <Route path="dashboard" element={<DashboardScreen />} />
          <Route path="schedule" element={<div>schedule</div>} />
        </Route>

        {/* UnAuthorization */}
        <Route element={<UnAuthorizedRoute />}>
          <Route path="/sign-in" element={<SignInScreen />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
          <Route path="/auth/kakao" element={<KaKaoLoginScreen />} />
          <Route path="/auth/google" element={<GoogleLoginScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
