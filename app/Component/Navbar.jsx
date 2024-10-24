"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../public/logo.png";
import support from "../../public/heart.png";
import Image from "next/image";
import { faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SidebarSettings from "./SidebarSettings";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div
      className={`${
        isDarkMode ? "bg-ashColor" : "bg-white"
      } lg:h-[80px] h-[64px] w-full flex flex-row justify-between items-center align-middle px-4 text-white`}
    >
      <div className=" flex flex-row items-center gap-5">
        {/* nav logo */}
        <div className=" ">
          <Image src={logo} alt="logo" width={45} height={45} />
        </div>

        {/* nav title */}
        <div className=" hidden lg:flex flex-col w-fit">
          <h1 className=" font-bold text-primary text-lg">হাদিস সমূহ</h1>
          <p className=" text-primary text-[13px]">
            হাদিস পড়ুন শিখুন এবং জানুন
          </p>
        </div>

        <div>
          <h1 className=" md:hidden flex text-secondary font-semibold">
            আল হাদিস
          </h1>
        </div>
      </div>

      <div className="  flex flex-row justify-end lg:gap-16 gap-2">
        {/* search 226 49 */}
        <div className=" flex justify-start items-center align-middle lg:gap-2 lg:w-[266px] lg:h-[49px] w-6 h-6 p-5 lg:overflow-hidden lg:p-5 border-[2px] border-[#2B2B2B] rounded-lg lg:bg-ashColor bg-[#2B2B2B]">
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className=" hidden lg:flex">
            <input
              className=" text-primary bg-ashColor outline-none "
              type="search"
              name=""
              id=""
              placeholder="Search Hadith"
            />
          </div>
        </div>

        {/* support button */}
        <div className=" hidden lg:flex">
          <button className=" flex flex-row justify-center items-center gap-2 w-[150px] h-[50px] bg-secondary rounded-lg">
            <div>
              <p className=" font-bold text-[15px]">সাপোর্ট করুন</p>
            </div>
            <div>
              <Image
                className=" w-fit"
                src={support}
                alt="logo"
                width={30}
                height={30}
              />
            </div>
          </button>
        </div>

        <div>
          <SidebarSettings></SidebarSettings>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
