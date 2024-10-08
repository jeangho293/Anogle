import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthorizedRoute, UnAuthorizedRoute } from "./components";
import { SignInScreen, HomeScreen } from "../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthorizedRoute />}>
          <Route index element={<HomeScreen />} />
        </Route>

        {/* UnAuthorization */}
        <Route element={<UnAuthorizedRoute />}>
          <Route path="/sign-in" element={<SignInScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
