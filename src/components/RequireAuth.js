import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../authentication/AuthContext";

function RequireAuth({ children }) {
  const { auth } = useContext(AuthContext);
  console.log("AUTH CONTEXT VALUE:", auth);
  return auth?.accessToken ? <Outlet /> : <Navigate to="/login" replace />;
}

export default RequireAuth;
