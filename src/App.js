import './App.css';
import { SideBar } from './components/Sidebar';
import { DiscoverContainer } from './components/Discover/Discover';
import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainBody from './components/MainBody';






const router = createBrowserRouter([
  {
    path: "/ongaku",
    element: <MainBody/>,
  },
  
  {
    path: "/ongaku/discover",
    element: <DiscoverContainer/>,
  },
  
 
  
]);

function App() {
  
  return (
    <>
    <div className='main flex'>
      <div className='w-64'></div>
      <SideBar/>
      <div className=' flex-grow'>
        <RouterProvider router={router} />
      </div>
    </div>
    </>
  );
}

export default App;
