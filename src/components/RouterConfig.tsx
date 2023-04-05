import React from "react";
import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import Test from "../Test";

import Login from "../pages/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "test", element: <Test/>},
        ],
    },
    {path: "/login", element: <Login/>}
]);

export default router;
