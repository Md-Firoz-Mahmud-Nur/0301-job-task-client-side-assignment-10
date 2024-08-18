import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import AuthProvider from "./AuthProvider";
import Register from "./Register";
import { HelmetProvider } from "react-helmet-async";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutUs",
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>
          </PrivateRoute>
        ),
      },
      {
        path: "/contactUs",
        element: (
          <PrivateRoute>
            <ContactUs></ContactUs>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
);
