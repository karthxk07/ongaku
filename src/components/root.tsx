import React from "react";
import { Outlet } from "react-router";
import { SideBar } from "./Sidebar";

export function Root() {
  return (
    <>
      <div className="main flex">
        <div className="w-64"></div>
        <SideBar />
        <div className="detail flex-grow">
          <Outlet />s
        </div>
      </div>
    </>
  );
}
