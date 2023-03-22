import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes/routes";
import Test1 from "./pages/Tests/Test1";
import Test3 from "./pages/Tests/Test3";
import Test2 from "./pages/Tests/Test2";
import ShopLayout from "./pages/Shop/Layout";
const router = createHashRouter([
  {
    path: ROUTES.INDEX,
    element: <Layout />,
    children: [
      {
        path: ROUTES.TEST1,
        element: <Test1 />,
      },
      {
        path: ROUTES.TEST2,
        element: <Test2 />,
      },
      {
        path: ROUTES.TEST3,
        element: <Test3 />,
      },
      {
        path: ROUTES.SHOP,
        element: <ShopLayout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
