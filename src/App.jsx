import { createBrowserRouter } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Common } from "./Common";
import PublicRoute from "./RouteCheck/PublicRoute";
import ProtectedRoute from "./RouteCheck/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Common />,
    children: [
      {
        index: true,
        // element: <ChatPage />
        element: <ProtectedRoute> <ChatPage /> </ProtectedRoute>
      },
      {
        path: "login",
        element: <PublicRoute> <LoginPage /> </PublicRoute>
      },
      {
        path: "signup",
        element: <PublicRoute> <SignUpPage /> </PublicRoute>
      }
    ]

  }
]);
