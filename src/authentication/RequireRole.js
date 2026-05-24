import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "./AuthContext";

const RequireRole = ({ allowedRoles }) => {
  const { auth } = useContext(AuthContext);
  console.log("RequireRole auth:", auth);

  if (!auth?.accessToken) {
    return <Navigate to="/login" replace />;
  }

  const roles = auth?.roles || [];

  const hasRole = roles.some((r) =>
    allowedRoles.includes(r)
  );

  return hasRole ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default RequireRole;