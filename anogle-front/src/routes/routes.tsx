import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInScreen } from "../screens";
import { Header } from "../components";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/sign-in" element={<SignInScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
