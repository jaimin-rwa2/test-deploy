import { Navigate, Outlet, useLocation } from "react-router";
import { useUser } from "../context/userProvider";

export default function ProtectedRoute() {
  const { user } = useUser();
  const location = useLocation();

  // console.log(useLocation:, location);

  return (
    <>
      {user || location.pathname === "/" ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
