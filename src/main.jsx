import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root/RootLayout";
import ErrorPage from "./components/Root/ErrorPage";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Provider/AuthProvider";
import Services from "./Pages/Services";
import EventDetails from "./components/EventDetails";
import About from "./Pages/About";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout> </RootLayout>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/EventDetails/:id",
        element: <EventDetails> </EventDetails>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register> </Register>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
