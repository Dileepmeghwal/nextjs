import React from "react";
import Menu from "./components/sidebar/Menu";
import Sidebar from "./components/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6  w-full">{children}</main>
    </div>
  );
};

export default Layout;
