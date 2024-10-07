import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AuthorizedRoute() {
  const navigator = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigator("/sign-in");
    }
  });

  return (
    <div>
      hi
      <Outlet />
    </div>
  );
}

export { AuthorizedRoute };
