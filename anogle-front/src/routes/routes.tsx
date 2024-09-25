import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignInScreen } from "../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hi</div>} />
        <Route path="/sign-in" element={<SignInScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
