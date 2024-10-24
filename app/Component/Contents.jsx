import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Contents = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const [activeTab, setActiveTab] = useState('books'); // Default to 'books'

  // Dummy JSON data
const data = {
  books: [
    { id: "১", title: "ওহীর সূচনা অধ্যায়", hadithRange: "১ - ৭" },
    { id: "২", title: "ঈমান", hadithRange: "৮ - ৫৮" },
    { id: "৩", title: "ইল্‌ম", hadithRange: "৫৯ - ১৩৪" },
    { id: "৪", title: "ওজু", hadithRange: "১৩৫ - ২৪৭" },
    { id: "৫", title: "গোসল", hadithRange: "২৪৮ - ২৯৩" },
    { id: "৬", title: "হায়েজ", hadithRange: "২৯৪ - ৩৩৩" },
    { id: "৭", title: "তায়াম্মুম", hadithRange: "৩৩৪ - ৩৪৮" },
    { id: "৮", title: "সালাত", hadithRange: "৩৪৯ - ৫২০" },
    { id: "৯", title: "সালাতের ওয়াক্তসমূহ", hadithRange: "৫২১ - ৬০২" },
    { id: "১০", title: "আযান", hadithRange: "৬০৩ - ৮৭৫" },
    { id: "১১", title: "জুমু'আ", hadithRange: "৮৭৬ - ৯৪১" },
    { id: "১২", title: "খাওফ (ভয় ভীতির সালাত)", hadithRange: "৯৪২ - ৯৪৭" },
    { id: "১৩", title: "দুই ঈ’দ", hadithRange: "৯৪৮ - ৯৮৯" },
    { id: "১৪", title: "বিতর", hadithRange: "৯৯০ - ১০০৪" },
    { id: "১৫", title: "বৃষ্টির জন্য দোয়া", hadithRange: "১০০৫ - ১০৩৯" },
    { id: "১৬", title: "সূর্যগ্রহণ", hadithRange: "১০৪০ - ১০৬৬" },
    { id: "১৭", title: "কুরআন তিলাওয়াতের সিজ্‌দা", hadithRange: "১০৬৭ - ১০৭৯" },
    { id: "১৮", title: "সালাতে কসর করা", hadithRange: "১০৮০ - ১১১৯" },
    { id: "১৯", title: "তাহাজ্জুদ", hadithRange: "১১২০ - ১১৮৭" },
    { id: "২০", title: "মক্কা ও মদীনার মসজিদে সালাতের মর্যাদা", hadithRange: "১১৮৮ - ১১৯৭" },
    { id: "২১", title: "সালাতের সাথে সংশ্লিষ্ট কাজ", hadithRange: "১১৯৮ - ১২২৩" },
    { id: "২২", title: "সাহু", hadithRange: "১২২৪ - ১২৩৬" },
    { id: "২৩", title: "জানাযা", hadithRange: "১২৩৭ - ১৩৯৪" },
    { id: "২৪", title: "যাকাত", hadithRange: "১৩৯৫ - ১৫১২" }
  ],
  chapters: [
    { id: "১", title: "সহিহ বুখারী", totalHadith: 7563 },
    { id: "২", title: "সহিহ মুসলিম", totalHadith: 7453 },
    { id: "৩", title: "সুনানে আন-নাসায়ী", totalHadith: 5758 },
    { id: "৪", title: "সুনানে আবু দাউদ", totalHadith: 5274 },
    { id: "৫", title: "জামে' আত-তিরমিজি", totalHadith: 3956 },
    { id: "৬", title: "সুনানে ইবনে মাজাহ", totalHadith: 4341 },
    { id: "৭", title: "মুয়াত্তা ইমাম মালিক", totalHadith: 1832 },
    { id: "৮", title: "রিয়াদুস সলেহিন", totalHadith: 1905 },
    { id: "৯", title: "বুলুগুল মারাম", totalHadith: 1568 },
    { id: "১০", title: "আল লু'লু ওয়াল মারজান", totalHadith: 1906 },
    { id: "১১", title: "হাদিস সম্ভার", totalHadith: 2013 },
    { id: "১২", title: "সিলসিলা সহিহা", totalHadith: 60 },
    { id: "১৩", title: "জাল জয়িফ হাদিস সিরিজ", totalHadith: 102 },
    { id: "১৪", title: "মিশকাতুল মাসাবিহ", totalHadith: 2758 },
    { id: "১৫", title: "৪০ হাদিস", totalHadith: 42 },
    { id: "১৬", title: "আদাবুল মুফরাদ", totalHadith: 1336 },
    { id: "১৭", title: "জুজ'উল রাফায়েল ইয়াদাইন", totalHadith: 56 },
    { id: "১৮", title: "সহিহ হাদিসে কুদসি", totalHadith: 163 },
    { id: "১৯", title: "১০০ সুসাব্যস্ত হাদিস", totalHadith: 101 },
    { id: "২০", title: "মিশকাতে জয়িফ হাদিস", totalHadith: 106 },
    { id: "২১", title: "শামায়েলে তিরমিযি", totalHadith: 320 },
    { id: "২২", title: "সহিহ তারগিব ওয়াত তাহরিব", totalHadith: 200 },
    { id: "২৩", title: "সহিহ ফাযায়েলে আমল", totalHadith: 151 },
    { id: "২৪", title: "ঊপদেশ", totalHadith: 234 },
    { id: "২৫", title: "রমজানের দুর্বল হাদিস", totalHadith: 36 }
  ],
};

  return (
    <div className={`${isDarkMode ? 'bg-ashColor' : 'bg-white'} hidden lg:flex mb-5 h-screen flex-col lg:w-[350px] m-5 rounded-2xl`}>
      <div className={`flex flex-row items-center justify-between ${isDarkMode ? 'text-white bg-[#2C2C2C]' : 'text-primary bg-white'} border-b-2 border-[#2B2B2B]`}>
        <button 
          className={`w-1/2 flex justify-center items-center p-4 border-r-2 border-[#2B2B2B] ${activeTab === 'books' ? 'bg-secondary text-white' : ''}`} 
          onClick={() => setActiveTab('books')}
        >
          <h1>বই</h1>
        </button>
        <button 
          className={`w-1/2 flex justify-center items-center p-4 ${activeTab === 'chapters' ? 'bg-secondary text-white' : ''}`} 
          onClick={() => setActiveTab('chapters')}
        >
          <h1>অধ্যায়</h1>
        </button>
      </div>

      <div className="w-full p-5 overflow-hidden hover:overflow-y-scroll">
        {/* Search Input */}
        <div className="flex justify-start items-center align-middle lg:gap-4 lg:w-full lg:h-[49px] w-6 h-6 p-5 lg:overflow-hidden lg:p-5 rounded-lg lg:bg-[#2C2C2C]">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
          <input 
            className={`text-primary ${isDarkMode ? 'bg-[#2C2C2C]' : 'bg-primary text-black'}  outline-none lg:flex hidden`}
            type="search" 
            placeholder="Search Hadith"
          />
        </div>

        {/* Dynamic Content */}
        {(activeTab === 'books' ? data.books : data.chapters).map(item => (
          <div key={item.id} className="w-full h-[100px] p-2 rounded-2xl mt-4 flex flex-row gap-3 justify-start items-center text-primary hover:bg-[#2C2C2C]">
            <div className="hexagon flex justify-center align-middle items-center">
              <h1 className="text-white">{item.id}</h1>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <h1>{item.title}</h1>
              <p className="text-sm text-[#808080]">হাদিসের রেঞ্জ: {item.hadithRange}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button for Dark Mode */}
      <button onClick={() => setIsDarkMode(!isDarkMode)} className="mt-4 p-2 bg-primary text-white rounded">
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Contents;
