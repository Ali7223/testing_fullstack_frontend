import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../authentication/AuthContext";

function RequireAuth({ children }) {
  const { user } = useContext(AuthContext);
  console.log("AUTH CONTEXT VALUE:", user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RequireAuth;