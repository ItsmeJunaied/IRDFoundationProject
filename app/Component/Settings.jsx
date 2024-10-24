"use client";
import { toggleDarkMode } from "@/store/darkModeSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Settings = ({ setBanglaFont, setArabicFont }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Arial");
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectFont = (font) => {
    setSelectedFont(font);
    toggleDropdown();
  };

  const [arabicrangeValue, setArabicrangeValue] = useState(25);
  const [translateValue, setTranslateValue] = useState(25);

  const handleArabicRangeChange = (event) => {
    setArabicrangeValue(event.target.value);
    setArabicFont(event.target.value);
  };

  const handleTranslateRangeChange = (event) => {
    setTranslateValue(event.target.value);
    setBanglaFont(event.target.value);
  };

  // const [darkMode, setDarkMode] = useState(false)

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);


  return (
    <div
    className={`hidden lg:flex flex-col w-full h-full justify-end ${
      isDarkMode ? "bg-[#101010]" : "bg-[#F2F4F6]"
    }`}
  >
    <div
      className={`relative flex flex-col gap-5 lg:w-[336px] lg:h-[376px] rounded-2xl p-6 ${
        isDarkMode ? "text-white bg-ashColor" : "text-black bg-white"
      }  m-5`}
    >
      <div className="w-full">
        <h1 className="text-center text-xl">সেটিংস</h1>
      </div>

      <div>
        <p className="text-base">আরবি ফন্ট সিলেক্ট করুন</p>
      </div>

      <div className={`flex flex-row  ${
      isDarkMode ? "bg-ashColor" : "bg-white"
    } rounded-lg w-full`}>
        <div className="relative flex-none w-full">
          <button
            onClick={toggleDropdown}
            className={`flex justify-between w-full p-3 ${
              isDarkMode ? "text-white bg-[#2C2C2C]" : "text-primary bg-white"
            } border-2 border-ashColor rounded-md focus:outline-none`}
            aria-expanded={showOptions}
          >
            {selectedFont}
            <svg
              className={`${showOptions ? "hidden" : ""} w-6 h-6 stroke-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className={`${showOptions ? "" : "hidden"} w-6 h-6 stroke-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showOptions && (
            <div
              id="options"
              className="absolute z-10 w-full mt-1 bg-[#2C2C2C] border border-[#2C2C2C] rounded-md shadow-lg"
            >
              {["Arial", "Amiri", "Al Mushaf", "Me Quran", "KFGQ"].map(
                (font) => (
                  <button
                    key={font}
                    onClick={() => handleSelectFont(font)}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {font}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      <div>
        <p>এরাবিক ফন্ট সাইজ</p>
        <div className="slidecontainer flex flex-row justify-between items-center gap-2">
          <div className="w-full">
            <input
              type="range"
              min="18"
              max="40"
              value={arabicrangeValue}
              className="slider w-full"
              onChange={handleArabicRangeChange}
              style={{
                backgroundColor: isDarkMode ? "#2C2C2C" : "green",
              }}
            />
          </div>
          <div className="w-fit">{arabicrangeValue}</div>
        </div>
      </div>

      <div>
        <p>অনুবাদ ফন্ট সাইজ</p>
        <div className="slidecontainer flex flex-row justify-between items-center gap-2">
          <div className="w-full">
            <input
              type="range"
              min="18"
              max="40"
              value={translateValue}
              className="slider w-full"
              onChange={handleTranslateRangeChange}
              style={{
                backgroundColor: isDarkMode ? "#2C2C2C" : "green",
              }}
            />
          </div>
          <div className="w-fit">{translateValue}</div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <div>
          <p>নাইট মোড</p>
        </div>

        <div>
          <input
            onClick={() => dispatch(toggleDarkMode())}
            type="checkbox"
            className="toggle border-[#2B9E76] bg-[#2B9E76] [--tglbg:#234036]"
            checked={isDarkMode}
          />
        </div>
      </div>
    </div>

    <div
      className={`flex flex-col gap-5 lg:w-[336px] lg:h-full rounded-2xl p-6 ${
        isDarkMode ? "bg-ashColor" : "bg-white"
      } m-5`}
    >
      <div>
        <h1 className="text-lg">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h1>
      </div>

      <div>
        <p className="text-sm">
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা
          করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে
          আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে
          আল্লাহ্‌র কাছে কবুল হবে।
        </p>
      </div>

      {/* support button */}
      <div className="hidden lg:flex w-full justify-center">
        <button
          className="flex flex-row justify-center items-center gap-2 w-[150px] h-[50px] bg-secondary rounded-lg"
          aria-label="Support us button"
        >
          <p className="font-bold text-[15px] text-white">সাপোর্ট করুন</p>
        </button>
      </div>
    </div>
  </div>
);
};

export default Settings;