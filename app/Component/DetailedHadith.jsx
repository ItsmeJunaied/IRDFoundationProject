import { faBars, faBook, faBookOpen, faBookmark, faCircleExclamation, faCopy, faDiamondTurnRight, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import img from '../../public/design.png';
import MenuDrawer from './MenuDrawer';
const DetailedHadith = ({ menuOpen, setMenuOpen }) => {

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };
    return (
        <div className=' flex flex-col w-full h-[840px]  bg-[#101010] pt-5 gap-5 overflow-y-scroll '>

            <div>
                <MenuDrawer />
            </div>

            <div className=' hidden lg:flex lg:flex-col w-full bg-[#202020] rounded-2xl text-primary p-5  '>
                <div className=' flex flex-row gap-2 items-center '>

                    <div>
                        <FontAwesomeIcon icon={faBook} size='xs' className="text-[#A6ACAF] hover:text-secondary" />
                    </div>

                    <div>
                        <p>&gt;</p>
                    </div>

                    <div>
                        <p className=' text-sm'>Bukhari</p>
                    </div>

                    <div>
                        <p>&gt;</p>
                    </div>

                    <div>
                        <p className=' text-sm'>1</p>
                    </div>
                </div>

                <div className='border-b-2 border-[#2B2B2B] mt-5 mb-5'>

                </div>
                <div className=' flex flex-row justify-between items-center '>
                    <div className=' flex flex-row justify-start items-center gap-5'>
                        <div>
                            <FontAwesomeIcon icon={faBook} size='2xl' className=" text-secondary" />
                        </div>

                        <div className=' flex flex-col w-fit gap-2'>
                            <h1 className=' font-bold text-primary text-lg'>সহিহ বুখারী</h1>
                            <p className=' text-[#808080] text-[13px]'>সর্বমোট হাদিস - ৭৫৬৩</p>
                        </div>
                    </div>

                    <div>
                        <h1 className=' text-primary text-3xl'>صحيح البخاري</h1>
                    </div>
                </div>
            </div>

            <div className=' w-full p-5 flex flex-row justify-start gap-5 items-center bg-[#202020] rounded-xl'>

                <div className=' w-12 h-12 rounded-2xl text-white bg-secondary flex justify-center items-center'>
                    <p>১</p>
                </div>

                <div className=' '>
                    <h1 className=' text-primary text-lg'>ওহীর সূচনা অধ্যায়</h1>
                </div>
            </div>

            <div className=' flex flex-col justify-start bg-[#202020] p-5 rounded-xl gap-5'>
                <div className=' flex flex-row justify-start items-center  gap-3'>
                    <div>
                        <FontAwesomeIcon icon={faBookOpen} className=' text-secondary' />
                    </div>

                    <div>
                        <p className=' text-primary '>১/১. অধ্যায়ঃ</p>
                    </div>
                </div>

                <div>
                    <p className=' text-primary'>আল্লাহ্‌র রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে ওয়াহী [১] শুরু হয়েছিল।</p>
                </div>

                <div className='border-b-2 border-[#2B2B2B]  '> </div>

                <div><p className=' text-primary'>এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)</p></div>
            </div>

            <div className='flex flex-col justify-start bg-[#202020] p-5 rounded-xl gap-8'>
                <div className=' flex flex-row justify-start items-center gap-2'>
                    <div>
                        <Image src={img} alt='logo' width={30} height={30} />
                    </div>

                    <div>
                        <p className=' text-secondary text-lg'>১</p>
                    </div>
                </div>

                <div>
                    <p className=' text-[#A6A9AF] text-3xl'>حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ، يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‘ إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ

                    </p>
                </div>

                <div>
                    <p className='text-secondary text-lg'>
                        ‘আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ) থেকে বর্ণিত:
                    </p>
                </div>

                <div>
                    <p className=' text-primary text-lg'>
                        আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে, যে জন্যে, সে হিজরত করেছে। (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯, ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭, আহমাদ ১৬৮) ( আধুনিক প্রকাশনী- ১, ইসলামিক ফাউন্ডেশন ১)
                    </p>
                </div>

                <div className=' flex lg:flex-row flex-col justify-between items-center '>

                    <div className=' flex flex-row justify-start items-center gap-3'>
                        <div>
                            <p className=' text-primary'>হাদিসের মান :</p>
                        </div>
                        <div className=' bg-secondary px-3 py-1 rounded-lg'>
                            <p className=' text-white'>
                                সহিহ হাদিস
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-start items-center gap-8'>
                        <div><FontAwesomeIcon icon={faCopy} className=' text-primary' size='xl' /></div>
                        <div><FontAwesomeIcon icon={faBookmark} className=' text-primary' size='xl' /></div>
                        <div><FontAwesomeIcon icon={faShareNodes} className=' text-primary' size='xl' /></div>
                        <div><FontAwesomeIcon icon={faCircleExclamation} className=' text-primary' size='xl' /></div>
                        <div><FontAwesomeIcon icon={faCircleExclamation} className=' text-primary' size='xl' /></div>
                        <div><FontAwesomeIcon icon={faDiamondTurnRight} className=' text-primary' size='xl' /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedHadith;