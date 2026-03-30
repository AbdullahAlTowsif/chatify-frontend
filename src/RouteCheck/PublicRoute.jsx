import { Navigate } from "react-router";
import PageLoader from "../components/PageLoader";
import { useAuthStore } from "../store/useAuthStore";

const PublicRoute = ({ children }) => {
  const { authUser, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) return <PageLoader />;

  if (authUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;