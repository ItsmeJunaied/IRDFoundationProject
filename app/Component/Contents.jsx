import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contents = () => {
    return (
        <div className='  hidden lg:flex flex-col lg:w-[350px] m-5  bg-[#202020] rounded-2xl '>

            <div className=' flex flex-row items-center justify-between text-primary border-b-2 border-[#2B2B2B]'>
                <button className=' w-1/2 flex justify-center items-center p-4 border-r-2 border-[#2B2B2B] hover:bg-secondary hover:text-white'>
                    <h1>বই</h1>
                </button>
                <button className=' w-1/2 flex justify-center items-center p-4  hover:bg-secondary hover:text-white'>
                    <h1>অধ্যায়</h1>
                </button>
            </div>


            <div className=' w-full lg:h-[750px] p-5 overflow-hidden hover:overflow-y-scroll'>
                {/* search */}

                <div className=' flex justify-start items-center align-middle lg:gap-4 lg:w-full lg:h-[49px] w-6 h-6 p-5 lg:overflow-hidden lg:p-5  rounded-lg lg:bg-[#2C2C2C] '>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className=' text-white' />
                    </div>
                    <div className=' hidden lg:flex'>
                        <input className=' text-primary bg-[#2C2C2C] outline-none ' type="search" name="" id="" placeholder='Search Hadith' />
                    </div>
                </div>

                {/* contents 317 100 */}

                <div className='  w-full h-[100px] p-2 rounded-2xl mt-4  flex flex-row gap-3 justify-start items-center text-primary  hover:bg-[#2C2C2C]'>

                    <div className=' hexagon flex justify-center align-middle items-center'>
                        <h1 className=' text-white'>1</h1>
                    </div>

                    <div className=' flex flex-col justify-start gap-2 '>
                        <h1>ওহীর সূচনা অধ্যায়</h1>
                        <p className=' text-sm text-[#808080] '>হাদিসের রেঞ্জ: ১ - ৭</p>
                    </div>
                </div>
                <div className=' w-full h-[100px] p-2 rounded-2xl mt-4  flex flex-row gap-3 justify-start items-center text-primary  hover:bg-[#2C2C2C]'>

                    <div className=' hexagon flex justify-center align-middle items-center'>
                        <h1 className=' text-white'>1</h1>
                    </div>

                    <div className=' flex flex-col justify-start gap-2 '>
                        <h1>ওহীর সূচনা অধ্যায়</h1>
                        <p className=' text-sm text-[#808080] '>হাদিসের রেঞ্জ: ১ - ৭</p>
                    </div>
                </div>
                <div className=' w-full h-[100px] p-2 rounded-2xl mt-4  flex flex-row gap-3 justify-start items-center text-primary  hover:bg-[#2C2C2C]'>

                    <div className=' hexagon flex justify-center align-middle items-center'>
                        <h1 className=' text-white'>1</h1>
                    </div>

                    <div className=' flex flex-col justify-start gap-2 '>
                        <h1>ওহীর সূচনা অধ্যায়</h1>
                        <p className=' text-sm text-[#808080] '>হাদিসের রেঞ্জ: ১ - ৭</p>
                    </div>
                </div>
                <div className=' w-full h-[100px] p-2 rounded-2xl mt-4  flex flex-row gap-3 justify-start items-center text-primary  hover:bg-[#2C2C2C]'>

                    <div className=' hexagon flex justify-center align-middle items-center'>
                        <h1 className=' text-white'>1</h1>
                    </div>

                    <div className=' flex flex-col justify-start gap-2 '>
                        <h1>ওহীর সূচনা অধ্যায়</h1>
                        <p className=' text-sm text-[#808080] '>হাদিসের রেঞ্জ: ১ - ৭</p>
                    </div>
                </div>
                <div className=' w-full h-[100px] p-2 rounded-2xl mt-4  flex flex-row gap-3 justify-start items-center text-primary  hover:bg-[#2C2C2C]'>

                    <div className=' hexagon flex justify-center align-middle items-center'>
                        <h1 className=' text-white'>1</h1>
                    </div>

                    <div className=' flex flex-col justify-start gap-2 '>
                        <h1>ওহীর সূচনা অধ্যায়</h1>
                        <p className=' text-sm text-[#808080] '>হাদিসের রেঞ্জ: ১ - ৭</p>
                    </div>
                </div>
                <div className=' w-full h-[100px] p-2 rounded-2xl mt-4  flex flex-row gap-3 justify-start items-center text-primary  hover:bg-[#2C2C2C]'>

                    <div className=' hexagon flex justify-center align-middle items-center'>
                        <h1 className=' text-white'>1</h1>
                    </div>

                    <div className=' flex flex-col justify-start gap-2 '>
                        <h1>ওহীর সূচনা অধ্যায়</h1>
                        <p className=' text-sm text-[#808080] '>হাদিসের রেঞ্জ: ১ - ৭</p>
                    </div>
                </div>
                <div className=' w-full h-[100px] p-2 rounded-2xl mt-4  flex flex-row gap-3 justify-start items-center text-primary  hover:bg-[#2C2C2C]'>

                    <div className=' hexagon flex justify-center align-middle items-center'>
                        <h1 className=' text-white'>1</h1>
                    </div>

                    <div className=' flex flex-col justify-start gap-2 '>
                        <h1>ওহীর সূচনা অধ্যায়</h1>
                        <p className=' text-sm text-[#808080] '>হাদিসের রেঞ্জ: ১ - ৭</p>
                    </div>
                </div>
                <div className=' w-full h-[100px] p-2 rounded-2xl mt-4  flex flex-row gap-3 justify-start items-center text-primary  hover:bg-[#2C2C2C]'>

                    <div className=' hexagon flex justify-center align-middle items-center'>
                        <h1 className=' text-white'>1</h1>
                    </div>

                    <div className=' flex flex-col justify-start gap-2 '>
                        <h1>ওহীর সূচনা অধ্যায়</h1>
                        <p className=' text-sm text-[#808080] '>হাদিসের রেঞ্জ: ১ - ৭</p>
                    </div>
                </div>
                <div className=' w-full h-[100px] p-2 rounded-2xl mt-4  flex flex-row gap-3 justify-start items-center text-primary  hover:bg-[#2C2C2C]'>

                    <div className=' hexagon flex justify-center align-middle items-center'>
                        <h1 className=' text-white'>1</h1>
                    </div>

                    <div className=' flex flex-col justify-start gap-2 '>
                        <h1>ওহীর সূচনা অধ্যায়</h1>
                        <p className=' text-sm text-[#808080] '>হাদিসের রেঞ্জ: ১ - ৭</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contents;