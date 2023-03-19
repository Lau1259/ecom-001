import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./index.css";

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import { createHashRouter, RouterProvider } from "react-router-dom";
import Test1 from "./pages/Tests/Test1";
import Test3 from "./pages/Tests/Test3";
import Test2 from "./pages/Tests/Test2";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "test-1",
        element: <Test1 />,
      },
      {
        path: "test-2",
        element: <Test2 />,
      },
      {
        path: "test-3",
        element: <Test3 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
