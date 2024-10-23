'use client'
import React, { useState } from 'react';
import SideNavbar from '../Component/SideNavbar';
import Contents from '../Component/Contents';
import DetailedHadith from '../Component/DetailedHadith';
import Settings from '../Component/Settings';

const Hadith = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex flex-row bg-ashColor overflow-y-hidden overflow-x-hidden'>
            {/* Sidebar */}
            <div className='hidden lg:flex'>
                <SideNavbar />
            </div>

            {/* Content area */}
            <div className='bg-[#101010] w-fit rounded-tl-3xl '>
                <div><Contents /></div>
            </div>

            {/* Main content area */}
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 w-full    '>
                <div className='lg:col-span-4 col-span-1 bg-[#101010]'>
                    <DetailedHadith menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </div>
            </div>

            {/* Settings panel */}
            <div className='bg-[#101010]'>
                <div><Settings /></div>
            </div>
        </div>
    );
};

export default Hadith;
