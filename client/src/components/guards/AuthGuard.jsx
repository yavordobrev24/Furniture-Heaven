import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard(props) {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAdmin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
