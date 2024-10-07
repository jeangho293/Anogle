import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthorizedRoute, UnAuthorizedRoute } from "./components";
import { SignInScreen } from "../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthorizedRoute />}>
          <Route index />
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
