import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
