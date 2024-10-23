import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MenuDrawer = () => {
    return (
        <div className="drawer ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className=" drawer-button">
                    <div
                        className='  flex w-full flex-row justify-start gap-3 bg-ashColor rounded-2xl text-primary p-5 '

                    >

                        <div>
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </div>
                        <div>
                            <h1 className=' font-bold text-primary text-md'>সহিহ বুখারী</h1>
                        </div>
                    </div>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-full min-h-full bg-ashColor text-primary">

                    <div className=' flex flex-row justify-between items-center p-3'>

                        <div>
                            <p className=' text-xl text-white'>ক্যাটাগরি</p>
                        </div>

                        <div onClick={() => { document.getElementById('my-drawer').checked = false; }}>
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                        </div>
                    </div>

                    <div className=' flex flex-row items-center justify-between text-primary border-b-2 border-[#2B2B2B]'>
                        <button className=' w-1/2 flex justify-center items-center p-4 border-r-2 border-[#2B2B2B] hover:bg-secondary hover:text-white'>
                            <h1>বই</h1>
                        </button>
                        <button className=' w-1/2 flex justify-center items-center p-4  hover:bg-secondary hover:text-white'>
                            <h1>অধ্যায়</h1>
                        </button>
                    </div>

                    <div className=' w-full  h-[750px] p-5 overflow-hidden hover:overflow-y-scroll'>
                        {/* search */}

                        <div className=' flex justify-start items-center align-middle  gap-4  w-full   p-5  overflow-hidden  rounded-lg bg-[#2C2C2C] '>
                            <div>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className=' text-white' />
                            </div>
                            <div className=' '>
                                <input className=' text-primary bg-[#2C2C2C]  outline-none ' type="search" name="" id="" placeholder='Search Hadith' />
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
                </ul>
            </div>
        </div>
    );
};

export default MenuDrawer;