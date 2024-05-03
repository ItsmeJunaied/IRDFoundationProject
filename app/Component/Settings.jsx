'use client'
import React, { useState } from 'react';


const Settings = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedFont, setSelectedFont] = useState('Arial');

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
    };

    const handleTranslateRangeChange = (event) => {
        setTranslateValue(event.target.value);
    };

    return (

        <div className='  hidden lg:flex flex-col w-full h-full justify-end bg-[#101010]'>

            <div className=' relative flex flex-col gap-5 lg:w-[336px] lg:h-[376px] rounded-2xl p-6 text-primary bg-[#202020] m-5 '>

                <div className=' w-full'>
                    <h1 className='  text-center text-xl '>সেটিংস</h1>
                </div>

                <div>
                    <p className='text-base'>আরবি ফন্ট সিলেক্ট করুন</p>
                </div>


                <div className="flex flex-row bg-[#202020] rounded-lg w-full">
                    <div className="relative flex-none w-full">
                        <button onClick={toggleDropdown} className="flex justify-between w-full p-3 text-primary bg-[#2C2C2C] border-2 border-[#202020] rounded-md focus:outline-none">
                            {selectedFont}
                            <svg className={`${showOptions ? 'hidden' : ''} w-6 h-6 stroke-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <svg className={`${showOptions ? '' : 'hidden'} w-6 h-6 stroke-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div id="options" className={`${showOptions ? '' : 'hidden'} absolute z-10 w-full mt-1 bg-[#2C2C2C] border border-[#2C2C2C] rounded-md shadow-lg`}>
                            <button onClick={() => handleSelectFont('Arial')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Arial</button>
                            <button onClick={() => handleSelectFont('Amiri')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Amiri</button>
                            <button onClick={() => handleSelectFont('Al Mushaf')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Al Mushaf</button>
                            <button onClick={() => handleSelectFont('Me Quran')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Me Quran</button>
                            <button onClick={() => handleSelectFont('KFGQ')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">KFGQ</button>
                        </div>
                    </div>
                </div>

                <div>
                    <p>এরাবিক ফন্ট সাইজ</p>
                    <div className="slidecontainer flex flex-row justify-between items-center gap-2">
                        <div className=' w-full'>
                            <input
                                type="range"
                                min="18"
                                max="40"
                                value={arabicrangeValue}
                                className="slider w-full accent"
                                id="myRange"
                                onChange={handleArabicRangeChange}
                                style={{ backgroundColor: "green" }}
                            />
                        </div>
                        <div className=' w-fit'>{arabicrangeValue}</div>
                    </div>
                </div>
                <div>
                    <p>অনুবাদ ফন্ট সাইজ</p>
                    <div className="slidecontainer flex flex-row justify-between items-center gap-2">
                        <div className=' w-full'>
                            <input
                                type="range"
                                min="18"
                                max="40"
                                value={translateValue}
                                className="slider w-full accent"
                                id="myRange"
                                onChange={handleTranslateRangeChange}
                                style={{ backgroundColor: "green" }}
                            />
                        </div>
                        <div className=' w-fit'>{translateValue}</div>
                    </div>
                </div>

                <div className=' flex flex-row justify-between items-center'>

                    <div>
                        <p>নাইট মোড</p>
                    </div>

                    <div>
                        <h1>bth</h1>
                    </div>
                </div>
            </div>



            <div className=' flex flex-col gap-5 lg:w-[336px] lg:h-full rounded-2xl p-6 text-primary bg-[#202020] m-5 '>
                <div>
                    <h1 className=' text-lg text-primary '>আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h1>
                </div>

                <div>
                    <p className=' text-primary text-sm'>আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।</p>
                </div>

                {/* support button */}
                <div className=' hidden lg:flex w-full justify-center'>
                    <button className=' flex flex-row justify-center items-center gap-2 w-[150px] h-[50px] bg-secondary rounded-lg'>
                        <div>
                            <p className=' font-bold text-[15px] text-white'>সাপোর্ট করুন</p>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Settings;