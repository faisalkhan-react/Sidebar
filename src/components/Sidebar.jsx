import React, { useState } from "react";
import { TbBrandBackbone } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { CiPercent } from "react-icons/ci";
import { IoListCircleSharp } from "react-icons/io5";
import { FaInbox } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  TbMessageReportFilled,
  TbDeviceHeartMonitor,
  TbBrandAppgallery,
} from "react-icons/tb";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`text-amber-50 ${
        isCollapsed ? "w-20" : "w-64"
      } h-screen bg-[#001529] flex flex-col p-4 relative transition-all duration-300`}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-5 bg-green-500 rounded-full p-2 hover:bg-blue-600 transition-colors z-10"
      >
        {isCollapsed ? (
          <FiChevronRight className="text-white text-lg" />
        ) : (
          <FiChevronLeft className="text-white text-lg" />
        )}
      </button>

      <h1
        className={`py-2 flex items-center justify-center font-medium ${
          isCollapsed ? "text-xl" : "text-2xl"
        }`}
      >
        <TbBrandBackbone
          className={`${isCollapsed ? "mr-0" : "mr-3"} text-green-600`}
        />
        {!isCollapsed && "Heepsy"}
      </h1>

      <ul className="space-y-2 mt-4">
        {/* All menu items with consistent alignment */}
        <li className={`flex ${isCollapsed ? "justify-center" : "px-6"} py-2`}>
          <div
            className={`flex items-center w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm cursor-pointer rounded-md text-green-600`}
          >
            <IoIosSearch className="text-lg" />
            {!isCollapsed && <span className="ml-3">Search</span>}
          </div>
        </li>

        {/* Offers with Dropdown */}
        <li
          className={`relative group ${
            isCollapsed ? "justify-center" : "px-6"
          } py-2`}
        >
          <div
            className={`flex items-center justify-between w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <div className="flex items-center">
              <CiPercent className="text-lg" />
              {!isCollapsed && <span className="ml-3">Offers</span>}
            </div>
            {!isCollapsed && (
              <FiChevronRight className="text-[#ffffffa5] group-hover:text-white text-lg" />
            )}
          </div>
        </li>

        {/* Lists */}
        <li className={`flex ${isCollapsed ? "justify-center" : "px-6"} py-2`}>
          <div
            className={`flex items-center w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <IoListCircleSharp className="text-lg" />
            {!isCollapsed && <span className="ml-3">Lists</span>}
          </div>
        </li>

        {/* Inbox */}
        <li className={`flex ${isCollapsed ? "justify-center" : "px-6"} py-2`}>
          <div
            className={`flex items-center w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <FaInbox className="text-lg" />
            {!isCollapsed && <span className="ml-3">Inbox</span>}
          </div>
        </li>

        {/* Outreach emails */}
        <li className={`flex ${isCollapsed ? "justify-center" : "px-6"} py-2`}>
          <div
            className={`flex items-center w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <MdEmail className="text-lg" />
            {!isCollapsed && <span className="ml-3">Outreach emails</span>}
          </div>
        </li>

        {/* Reports */}
        <li className={`flex ${isCollapsed ? "justify-center" : "px-6"} py-2`}>
          <div
            className={`flex items-center w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <TbMessageReportFilled className="text-lg" />
            {!isCollapsed && <span className="ml-3">Reports</span>}
          </div>
        </li>

        {/* Monitoring media */}
        <li className={`flex ${isCollapsed ? "justify-center" : "px-6"} py-2`}>
          <div
            className={`flex items-center w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <TbDeviceHeartMonitor className="text-lg" />
            {!isCollapsed && <span className="ml-3">Monitoring media</span>}
          </div>
        </li>

        {/* Media gallery */}
        <li className={`flex ${isCollapsed ? "justify-center" : "px-6"} py-2`}>
          <div
            className={`flex items-center w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <TbBrandAppgallery className="text-lg" />
            {!isCollapsed && <span className="ml-3">Media gallery</span>}
          </div>
        </li>

        {/* Creator payment */}
        <li className={`flex ${isCollapsed ? "justify-center" : "px-6"} py-2`}>
          <div
            className={`flex items-center w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <PiContactlessPaymentFill className="text-lg" />
            {!isCollapsed && <span className="ml-3">Creator payment</span>}
          </div>
        </li>

        {/* Check my profile */}
        <li className={`flex ${isCollapsed ? "justify-center" : "px-6"} py-2`}>
          <div
            className={`flex items-center w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <CgProfile className="text-lg" />
            {!isCollapsed && <span className="ml-3">Check my profile</span>}
          </div>
        </li>

        {/* Help */}
        <li
          className={`relative group ${
            isCollapsed ? "justify-center" : "px-6"
          } py-2`}
        >
          <div
            className={`flex items-center justify-between w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <div className="flex items-center">
              <IoMdHelpCircleOutline className="text-lg" />
              {!isCollapsed && <span className="ml-3">Help</span>}
            </div>
            {!isCollapsed && (
              <FiChevronRight className="text-[#ffffffa5] group-hover:text-white text-lg" />
            )}
          </div>
        </li>

        {/* Language */}
        <li
          className={`relative group ${
            isCollapsed ? "justify-center" : "px-6"
          } py-2`}
        >
          <div
            className={`flex items-center justify-between w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <div className="flex items-center">
              <IoLanguage className="text-lg" />
              {!isCollapsed && <span className="ml-3">Language</span>}
            </div>
            {!isCollapsed && (
              <FiChevronRight className="text-[#ffffffa5] group-hover:text-white text-lg" />
            )}
          </div>
        </li>

        {/* User */}
        <li
          className={`relative group ${
            isCollapsed ? "justify-center" : "px-6"
          } py-2`}
        >
          <div
            className={`flex items-center justify-between w-full ${
              isCollapsed ? "justify-center" : ""
            } text-sm hover:text-white text-[#ffffffa5] cursor-pointer`}
          >
            <div className="flex items-center">
              <LuCircleUser className="text-lg" />
              {!isCollapsed && <span className="ml-3">User</span>}
            </div>
            {!isCollapsed && (
              <FiChevronRight className="text-[#ffffffa5] group-hover:text-white text-lg" />
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
