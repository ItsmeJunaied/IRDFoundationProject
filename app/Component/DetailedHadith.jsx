import {
  faBars,
  faBook,
  faBookOpen,
  faBookmark,
  faCircleExclamation,
  faCopy,
  faDiamondTurnRight,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import img from "../../public/design.png";
import MenuDrawer from "./MenuDrawer";
import { useSelector } from "react-redux";
const DetailedHadith = ({ menuOpen, setMenuOpen, arabiFont, banglaFont }) => {
  const hadithData = {
    book: {
      name: "Sahih Bukhari",
      arabicName: "صحيح البخاري",
      totalHadith: 7563,
    },
    chapter: {
      number: 1,
      title: "ওহীর সূচনা অধ্যায়",
      arabicTitle: "بَدْءُ الوَحْيِ",
    },
    hadith: {
      number: 1,
      arabic:
        "حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ، يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‘ إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
      bangla:
        "আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে, যে জন্যে, সে হিজরত করেছে। (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯, ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭, আহমাদ ১৬৮) ( আধুনিক প্রকাশনী- ১, ইসলামিক ফাউন্ডেশন ১)",
      reference: "(৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০...)",
      grade: "Sahih",
    },
    verse: {
      arabic:
        "“إِنَّا أَوْحَيْنَا إِلَيْكَ كَمَا أَوْحَيْنَا إِلَى نُوحٍ وَالنَّبِيِّينَ مِنْ بَعْدِهِ”",
      bangla:
        "“নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী প্রেরণ করেছি...”(সূরা আন-নিসা ৪/১৬৩)",
    },
  };

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div
      className={`flex flex-col w-full h-screen ${
        isDarkMode ? "bg-[#101010]" : "bg-[#F2F4F6]"
      } pt-5 gap-5 overflow-y-scroll`}
    >
      {/* Top Section */}
      <div
        className={`hidden lg:flex lg:flex-col w-full ${
          isDarkMode ? "bg-ashColor" : "bg-white"
        } rounded-2xl ${isDarkMode ? "text-primary" : "text-black"} p-5`}
      >
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon
            icon={faBook}
            size="xs"
            className={`${
              isDarkMode ? "text-[#A6ACAF]" : "text-[#6C757D]"
            } hover:text-secondary`}
          />
          <p>&gt;</p>
          <p className="text-sm">{hadithData.book.name}</p>
          <p>&gt;</p>
          <p className="text-sm">{hadithData.chapter.number}</p>
        </div>

        <div className="border-b-2 border-[#2B2B2B] mt-5 mb-5"></div>

        {/* Book Details */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-5 items-center">
            <FontAwesomeIcon
              icon={faBook}
              size="2xl"
              className="text-secondary"
            />
            <div className="flex flex-col">
              <h1
                className={`font-bold ${
                  isDarkMode ? "text-primary" : "text-black"
                } text-lg`}
                style={{ fontSize: `${banglaFont}px` }}
              >
                সহিহ বুখারী
              </h1>
              <p className="text-[#808080] text-[13px]">
                সর্বমোট হাদিস - {hadithData.book.totalHadith}
              </p>
            </div>
          </div>

          <h1
            className={`${isDarkMode ? "text-primary" : "text-black"} text-3xl`}
            style={{ fontSize: `${arabiFont}px` }}
          >
            {hadithData.book.arabicName}
          </h1>
        </div>
      </div>

      {/* Chapter Section */}
      <div
        className={`w-full p-5 flex gap-5 items-center ${
          isDarkMode ? "bg-ashColor" : "bg-white"
        } rounded-xl`}
      >
        <div className="w-12 h-12 rounded-2xl text-white bg-secondary flex justify-center items-center">
          <p>{hadithData.chapter.number}</p>
        </div>
        <h1
          className={`${isDarkMode ? "text-primary" : "text-black"} text-lg`}
          style={{ fontSize: `${banglaFont}px` }}
        >
          {hadithData.chapter.title}
        </h1>
      </div>

      {/* Hadith Section */}
      <div
        className={`flex flex-col ${
          isDarkMode ? "bg-ashColor" : "bg-white"
        } p-5 rounded-xl gap-5`}
      >
        <div className="flex flex-row gap-3 items-center">
          <FontAwesomeIcon icon={faBookOpen} className="text-secondary" />
          <p className={`${isDarkMode ? "text-primary" : "text-black"}`}>
            ১/১. অধ্যায়ঃ
          </p>
        </div>

        <p
          className={`${isDarkMode ? "text-primary" : "text-black"}`}
          style={{ fontSize: `${banglaFont}px` }}
        >
          {hadithData.verse.bangla}
        </p>
        <div className="border-b-2 border-[#2B2B2B]"></div>
        <p
          className={`${isDarkMode ? "text-primary" : "text-black"}`}
          style={{ fontSize: `${arabiFont}px` }}
        >
          {hadithData.verse.arabic}
        </p>
      </div>

      {/* Hadith Arabic and Bangla */}
      <div
        className={`flex flex-col ${
          isDarkMode ? "bg-ashColor" : "bg-white"
        } p-5 rounded-xl gap-8`}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className="text-secondary text-lg">{hadithData.hadith.number}</p>
          </div>
          <div className="lg:hidden flex bg-secondary px-3 py-1 rounded-lg">
            <p className="text-white">{hadithData.hadith.grade}</p>
          </div>
        </div>

        <p
          className="text-[#A6A9AF] text-3xl"
          style={{ fontSize: `${arabiFont}px` }}
        >
          {hadithData.hadith.arabic}
        </p>
        <p
          className={`${isDarkMode ? "text-secondary" : "text-black"} text-lg`}
        >
          {hadithData.hadith.bangla}
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="hidden lg:flex items-center gap-3">
            <p className={`${isDarkMode ? "text-primary" : "text-black"}`}>
              হাদিসের মান :
            </p>
            <div className="bg-secondary px-3 py-1 rounded-lg">
              <p className="text-white">{hadithData.hadith.grade}</p>
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-8 items-center">
            <FontAwesomeIcon
              icon={faCopy}
              className={`${isDarkMode ? "text-primary" : "text-black"}`}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faBookmark}
              className={`${isDarkMode ? "text-primary" : "text-black"}`}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              className={`${isDarkMode ? "text-primary" : "text-black"}`}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={`${isDarkMode ? "text-primary" : "text-black"}`}
              size="xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedHadith;
