import React from "react";
import Menu from "./components/sidebar/Menu";
import Sidebar from "./components/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="  w-full h-screen dark:bg-surface-300 ">{children}</main>
    </div>
  );
};

export default Layout;
