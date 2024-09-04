import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Frontpage from "../pages/dashboard";
import AddProductPage from "../pages/productform";
import ProductImageForm from "../pages/ProductImage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Frontpage />
    },
    {
        path: '/add-product',
        element: <AddProductPage />,
      },
    {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path:"/add-image",
        element:<ProductImageForm />,
      }
])

export default router;