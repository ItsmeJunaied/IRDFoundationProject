"use client";
import React, { useState } from "react";
import SideNavbar from "../Component/SideNavbar";
import Contents from "../Component/Contents";
import DetailedHadith from "../Component/DetailedHadith";
import Settings from "../Component/Settings";
import { useSelector } from "react-redux";

const Hadith = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [arabiFont, setArabicFont] = useState(25);
  const [banglaFont, setBanglaFont] = useState(25);

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div
      className={`flex flex-row ${
        isDarkMode ? "bg-[#101010]" : "bg-white"
      } overflow-y-hidden overflow-x-hidden`}
    >
      {/* Sidebar */}
      <div className="hidden lg:flex">
        <SideNavbar />
      </div>

      {/* Content area */}
      <div className={`${
        isDarkMode ? "bg-[#101010]" : "bg-[#F2F4F6]"
      } w-fit rounded-tl-3xl`} >
        <div>
          <Contents />
        </div>
      </div>

      {/* Main content area */}
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 w-full    ">
        <div className="lg:col-span-4 col-span-1 bg-[#101010]">
          <DetailedHadith
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            arabiFont={arabiFont}
            banglaFont={banglaFont}
          />
        </div>
      </div>

      {/* Settings panel */}
      <div className={`${
        isDarkMode ? "bg-[#101010]" : "bg-[#F2F4F6]"
      }`}>
        <div>
          <Settings
            setBanglaFont={setBanglaFont}
            setArabicFont={setArabicFont}
          />
        </div>
      </div>
    </div>
  );
};

export default Hadith;
