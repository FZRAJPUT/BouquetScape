import React from "react";
import { Outlet } from "react-router-dom"; // ✅ import Outlet
import Sidebar from "../components/Sidebar";

const Main = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto bg-gray-100">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Main;
