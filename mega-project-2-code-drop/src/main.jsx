import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Create from "./pages/Create.jsx";
import CDPreview from "./pages/CDPreview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "landing",
        element: <Landing />,
      },
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: ":id",
        element: <CDPreview />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
