import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import JobPage from "./pages/JobPage";
import JobDetailPage from "./pages/JobDetailPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "jobs",
    element: <JobPage />,
  },
  {
    path: "jobs/:jobId",
    element: <JobDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
);
