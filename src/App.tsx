import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/core/Home";
import Signup from "./components/core/Signup";
import SendOTP from "./components/core/SendOTP";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/sendOtp",
    element: <SendOTP />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
