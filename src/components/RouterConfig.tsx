import React from "react";
import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import Chat from "../pages/chat"

import Login from "../pages/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "chat", element: <Chat/>},
        ],
    },
    {path: "/login", element: <Login/>}
]);

export default router;
