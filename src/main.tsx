import React from "react";
import ReactDOM from "react-dom/client";
import Auth from "./pages/auth";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/login.tsx";
import Register from "./pages/auth/register.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Sidebar } from "./layout";
import { NewChat } from "./pages/chat/NewChat.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ExistingChat } from "./pages/chat/ExistingChat.tsx";
import WithAxios from "./api/WithAxios.tsx";
import { PublicLayout } from "./layout/PublicLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      { path: "/", element: <NewChat /> },
      { path: "/:chatId", element: <ExistingChat /> },
    ],
  },
  {
    path: "/auth",
    element: <PublicLayout />,
    children: [
      { path: "", element: <Auth /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

// Create a client
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="112279668648-9heiot044hmqg718nolbrm328hbvtj50.apps.googleusercontent.com">
      <WithAxios>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </WithAxios>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
