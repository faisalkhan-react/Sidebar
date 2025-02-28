import React, { useState } from "react";
import { TbBrandBackbone } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { CiPercent } from "react-icons/ci";
import { IoListCircleSharp } from "react-icons/io5";
import { FaInbox } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbMessageReportFilled, TbDeviceHeartMonitor,TbBrandAppgallery,} from "react-icons/tb";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";
import { FiChevronRight } from "react-icons/fi"; // Dropdown arrow icon
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-amber-50 w-64 h-screen bg-[#001529] flex flex-col p-4 relative">
      <h1 className="py-2 flex items-center justify-center font-medium text-2xl">
        <TbBrandBackbone className="mr-3 text-green-600 text-2xl" /> Heepsy
      </h1>

      <ul className="space-y-2">
        <li className="flex items-center px-6 py-2 text-sm cursor-pointer rounded-md text-green-600">
          <IoIosSearch className="mr-3 text-lg" /> Search
        </li>
        <li className="relative group">
          <div className="flex items-center justify-between px-6 py-2 text-sm hover:text-white text-[#ffffffa5] cursor-pointer">
            <div className="flex items-center">
              <CiPercent className="mr-3 text-lg" /> Offers
            </div>
            <FiChevronRight className="text-[#ffffffa5] group-hover:text-white text-lg" />
          </div>
          <div className="absolute left-[110%] top-[-10px] w-[220px] bg-[#001529] text-white p-4 rounded-lg shadow-lg border border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ul className="space-y-2">
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                My proposals
              </li>
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                My campaign offers
              </li>
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                Marketplace
              </li>
              <button className="w-full mt-2 text-sm py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                Create campaign offer
              </button>
            </ul>
          </div>
        </li>

        <li className="flex items-center px-6 py-2 hover:text-white text-sm text-[#ffffffa5] cursor-pointer">
          <IoListCircleSharp className="mr-3 text-lg" /> Lists
        </li>
        <li className="flex items-center px-6 py-2 hover:text-white text-sm text-[#ffffffa5] cursor-pointer">
          <FaInbox className="mr-3 text-lg" /> Inbox
        </li>
        <li className="flex items-center px-6 py-2 hover:text-white text-sm text-[#ffffffa5] cursor-pointer">
          <MdEmail className="mr-3 text-lg" /> Outreach emails
        </li>
        <li className="flex items-center px-6 py-2 hover:text-white text-sm text-[#ffffffa5] cursor-pointer">
          <TbMessageReportFilled className="mr-3 text-lg" /> Reports
        </li>
        <li className="flex items-center px-6 py-2 hover:text-white text-sm text-[#ffffffa5] cursor-pointer">
          <TbDeviceHeartMonitor className="mr-3 text-lg" /> Monitoring media
        </li>
        <li className="flex items-center px-6 py-2 hover:text-white text-sm text-[#ffffffa5] cursor-pointer">
          <TbBrandAppgallery className="mr-3 text-lg" /> Media gallery
        </li>
        <li className="flex items-center px-6 py-2 hover:text-white text-sm text-[#ffffffa5] cursor-pointer">
          <PiContactlessPaymentFill className="mr-3 text-lg" /> Creator payment
        </li>
        <li className="mt-15 flex items-center hover:text-white px-6 py-2 text-sm text-[#ffffffa5] cursor-pointer">
          <CgProfile className="mr-3 text-lg" /> Check my profile
        </li>

        <li className="relative group">
          <div className="flex items-center justify-between px-6 py-2 text-sm hover:text-white text-[#ffffffa5] cursor-pointer">
            <div className="flex items-center">
              <IoMdHelpCircleOutline className="mr-3 text-lg" /> Help
            </div>
            <FiChevronRight className="text-[#ffffffa5] group-hover:text-white text-lg" />
          </div>
          <div className="absolute left-[110%] top-[-10px] w-[220px] bg-[#001529] text-white p-4 rounded-lg shadow-lg border border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ul className="space-y-2">
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                Contact Support
              </li>
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                Help Center
              </li>
            </ul>
          </div>
        </li>
        <li className="relative group">
          <div className="flex items-center justify-between px-6 py-2 text-sm hover:text-white text-[#ffffffa5] cursor-pointer">
            <div className="flex items-center">
              <IoLanguage className="mr-3 text-lg" /> Language
            </div>
            <FiChevronRight className="text-[#ffffffa5] group-hover:text-white text-lg" />
          </div>
          <div className="absolute left-[110%] top-[-70px] w-[220px] bg-[#001529] text-white p-4 rounded-lg shadow-lg border border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ul className="space-y-2">
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                English (EN)🇺🇸
              </li>
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                Español (ES)🇪🇸
              </li>
            </ul>
          </div>
        </li>
        <li className="relative group">
          <div className="flex items-center justify-between px-6 py-2 text-sm hover:text-white text-[#ffffffa5] cursor-pointer">
            <div className="flex items-center">
              <LuCircleUser className="mr-3 text-lg" /> User
            </div>
            <FiChevronRight className="text-[#ffffffa5] group-hover:text-white text-lg" />
          </div>
          <div className="absolute left-[110%] bottom-[-10px] w-[220px] bg-[#001529] text-white p-4 rounded-lg shadow-lg border border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ul className="space-y-2">
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                My profile
              </li>
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                Pricing
              </li>
              <li className="cursor-pointer text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                Settings
              </li>
              <li className="cursor-pointer flex text-red-600 text-sm px-3 py-2 hover:bg-gray-700 rounded-md">
                <IoMdLogOut className="mr-3 text-lg" />
                Logout
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
