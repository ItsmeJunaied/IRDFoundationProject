import {
  faBook,
  faBookOpen,
  faBookmark,
  faBoxesStacked,
  faHouse,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const SideNavbar = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div
      className={` lg:w-[95px]  h-full  ${
        isDarkMode ? "bg-ashColor" : "bg-white"
      } `}
    >
      <div className=" flex flex-col h-screen justify-center items-center align-middle gap-5">
        <Link href="">
          <di
            className={`  ${
              isDarkMode
                ? "bg-ashColor hover:bg-[#2C2C2C] "
                : "bg-white hover:bg-[#F2F4F6]"
            }  rounded-2xl w-6 h-6 p-8 flex justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faHouse}
              size="2xl"
              className="text-[#A6ACAF] hover:text-secondary"
            />
          </di>
        </Link>

        <Link href="">
          <div
            className={`  ${
              isDarkMode
                ? "bg-ashColor hover:bg-[#2C2C2C] "
                : "bg-white hover:bg-[#F2F4F6]"
            }  rounded-2xl w-6 h-6 p-8 flex justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faBook}
              size="2xl"
              className="text-[#A6ACAF] hover:text-secondary"
            />
          </div>
        </Link>

        <Link href="">
          <di
            className={`  ${
              isDarkMode
                ? "bg-ashColor hover:bg-[#2C2C2C] "
                : "bg-white hover:bg-[#F2F4F6]"
            }  rounded-2xl w-6 h-6 p-8 flex justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              size="2xl"
              className="text-[#A6ACAF] hover:text-secondary"
            />
          </di>
        </Link>
        <Link href="">
          <di
            className={`  ${
              isDarkMode
                ? "bg-ashColor hover:bg-[#2C2C2C] "
                : "bg-white hover:bg-[#F2F4F6]"
            }  rounded-2xl w-6 h-6 p-8 flex justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faBookmark}
              size="2xl"
              className="text-[#A6ACAF] hover:text-secondary"
            />
          </di>
        </Link>
        <Link href="">
          <di
            className={`  ${
              isDarkMode
                ? "bg-ashColor hover:bg-[#2C2C2C] "
                : "bg-white hover:bg-[#F2F4F6]"
            }  rounded-2xl w-6 h-6 p-8 flex justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faBoxesStacked}
              size="2xl"
              className="text-[#A6ACAF] hover:text-secondary"
            />
          </di>
        </Link>
        <Link href="">
          <di
            className={`  ${
              isDarkMode
                ? "bg-ashColor hover:bg-[#2C2C2C] "
                : "bg-white hover:bg-[#F2F4F6]"
            }  rounded-2xl w-6 h-6 p-8 flex justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              size="2xl"
              className="text-[#A6ACAF] hover:text-secondary"
            />
          </di>
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
