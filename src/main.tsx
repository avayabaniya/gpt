import React from 'react'
import ReactDOM from 'react-dom/client'
import Auth from './pages/auth'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Login from './pages/auth/login.tsx';
import Register from './pages/auth/register.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Sidebar } from './layout';


const router = createBrowserRouter([
  { path: "/", element: <Sidebar />, children: [{ path: "/", element: <div>Test</div> }] },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/auth/login',
    element: <Login />
  },

  {
    path: '/auth/register',
    element: <Register />
  }
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="112279668648-9heiot044hmqg718nolbrm328hbvtj50.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
