import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("Log desde Private", user);
  if (!user) return <Navigate to={"/login"} />;

  return children;
};
