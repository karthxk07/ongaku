import React from "react";
import { Outlet } from "react-router";
import { SideBar } from "./Sidebar";

export function Root() {
  return (
    <>
      <div className="main flex">
        <SideBar />
        <div className="detail w-[calc(100%-16rem)] ml-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}
