import { Navigate, Outlet } from "react-router-dom";

export const PublicLayout = () => {
  const token = localStorage.getItem("access_token");
  if (Boolean(token)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
