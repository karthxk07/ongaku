import "./App.css";
import { DiscoverContainer } from "./components/discover/discover";
import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import MainBody from "./components/MainBody";
import { Root } from "./components/root.tsx";
import { ShareContainer } from "./components/share/share.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "/discover",
        element: <DiscoverContainer />,
      },
      {
        path: "/share",
        element: <ShareContainer />,
      },
      {
        path: "/*",
        element: null,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
