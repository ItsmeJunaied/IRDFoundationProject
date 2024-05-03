'use client'
import React, { useState } from 'react';
import SideNavbar from '../Component/SideNavbar';
import Contents from '../Component/Contents';
import DetailedHadith from '../Component/DetailedHadith';
import Settings from '../Component/Settings';

const Hadith = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=' flex flex-row  bg-[#202020]'>
            <div className=' hidden lg:flex '>
                <SideNavbar />
            </div>
            <div className=' bg-[#101010]  w-fit rounded-tl-3xl'>
                <div className=' '><Contents /></div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 w-full  bg-[#101010] '>

                <div className='lg:col-span-4 col-span-1'><DetailedHadith menuOpen={menuOpen} setMenuOpen={setMenuOpen} /></div>
            </div>
            <div className=' bg-[#101010] '>
                <div ><Settings /></div>
            </div>
        </div>

    );
};

export default Hadith;