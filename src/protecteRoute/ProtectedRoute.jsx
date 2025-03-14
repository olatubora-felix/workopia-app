import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
export const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/" replace /> : <Outlet />;
};
