import { createBrowserRouter } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Common } from "./Common";
import ProtectedRoute from "./RouteCheck/ProtectedRoute";
import PublicRoute from "./RouteCheck/PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Common />,
    children: [
      {
        index: true,
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
