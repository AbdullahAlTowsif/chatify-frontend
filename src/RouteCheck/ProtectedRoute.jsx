import { Navigate } from "react-router";
import PageLoader from "../components/PageLoader";
import { useAuthStore } from "../store/useAuthStore";


const ProtectedRoute = ({ children }) => {
  const { authUser, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <PageLoader />; // or spinner
  }

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;