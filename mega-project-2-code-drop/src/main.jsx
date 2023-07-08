import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Drawer from "./components/Drawer.jsx";
import "./index.css";
import CDPreview from "./pages/CDPreview.jsx";
import Create from "./pages/Create.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Edit from "./pages/Edit.jsx";

const router = createBrowserRouter([
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/public/:id",
    element: <CDPreview />
  },
  {
    path: "/",
    element: <Drawer />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: ":id",
        element: <CDPreview />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
