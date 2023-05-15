import "./App.css";
import { DiscoverContainer } from "./components/discover/discover";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainBody from "./components/MainBody";
import { Root } from "./components/root.tsx";
import { ShareContainer } from "./components/share/share.tsx";

const router = createBrowserRouter([
  {
    path: "/ongaku",
    element: <Root />,
    children: [
      {
        path: "/ongaku",
        element: <MainBody />,
      },
      {
        path: "/ongaku/discover",
        element: <DiscoverContainer />,
      },
      {
        path: "/ongaku/share",
        element: <ShareContainer />,
      },
      {
        path: "/ongaku/*",
        element: null,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
