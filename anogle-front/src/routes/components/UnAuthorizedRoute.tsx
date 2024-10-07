import { Outlet } from "react-router-dom";

function UnAuthorizedRoute() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export { UnAuthorizedRoute };
