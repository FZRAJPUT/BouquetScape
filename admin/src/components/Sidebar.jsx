import React, { useState } from "react";
import {
  FaHome,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const menus = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Products", icon: <FaBoxOpen /> },
    { name: "Orders", icon: <FaShoppingCart /> },
    { name: "Customers", icon: <FaUsers /> },
    { name: "Reports", icon: <FaChartBar /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Logout", icon: <FaSignOutAlt /> },
  ];

  return (

    <div
      className={`"w-20" fixed left-0 bg-pink-500 flex flex-col items-center text-gray-100 min-h-screen p-5 pt-8 duration-300`}
    >
      <ul className="pt-6">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="flex items-center gap-x-4 p-2 text-sm cursor-pointer hover:bg-pink-300 rounded-md mt-2"
          >
            <Link className="flex gap-6 w-full" to={menu.name === "Dashboard" ? "/dashboard" : menu.name === "Products" ? "/products" : menu.name === "Orders" ? "/orders" : menu.name === "Customers" ? "/customers" : menu.name === "Reports" ? "/reports" : "/settings"}>
              <span className="text-lg">{menu.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
