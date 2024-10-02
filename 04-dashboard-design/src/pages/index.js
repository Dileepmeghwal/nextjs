import Header from "@/components/Header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import Layout from "@/Layout";
import React from "react";
 

const Index = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to the dashboard!</p>

      <div className="md:grid md:gap-2 md:grid-cols-3 mt-5">
        <div className="p-3 shadow-md rounded-md bg-blue-50">
          <span className="text-blue-500 text-[14px] font-medium">Sales</span>
          <p>$68,000</p>
        </div>
        <div className="p-3 shadow-md rounded-md">
          <span className="text-blue-500 text-[14px] font-medium">Earning</span>
          <p>$68,000</p>
        </div>
        <div className="p-3 shadow-md rounded-md">
          <span className="text-blue-500 text-[14px] font-medium">User</span>
          <p>$68,000</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
