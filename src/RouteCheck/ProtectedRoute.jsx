import { Navigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import PageLoader from "../components/PageLoader";

const ProtectedRoute = ({ children }) => {
  const { authUser, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <PageLoader />; // or spinner
  }

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  if (authUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;