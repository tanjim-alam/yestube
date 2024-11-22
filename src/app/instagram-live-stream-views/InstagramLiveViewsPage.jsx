
import React from 'react'
import dynamic from 'next/dynamic';
import { IoSearch } from "react-icons/io5";
import { IoMdWatch } from "react-icons/io";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdSupportAgent, MdOutlinePayment, MdLockOutline, MdOutlineWarning, MdLightMode } from "react-icons/md";
const HeroSection = dynamic(() => import('../components/HeroSection'));
import igLiveViewsData from "../constant/instagram/igLiveViewsData.json"
import ServiceCardForLive from '../components/ServiceCardForLive';

function InstagramLiveViewsPage() {
    return (
        <div>
            <HeroSection title={"Buy Instagram Live<br/>Stream Views with Instant Delivery"} subTitle={"<h3>Buy More <span class=text-primary>Live Views</span></h3>"} imgUrl={"/tubeviews-banner.webp"} />
            {/* package section start */}
            <div className='bg-white pb-16'>
                <div className='lg:w-[80%] w-[90%] flex flex-col gap-10 m-auto'>
                    <div className='flex flex-col items-center gap-4'>
                        <h3 className='lg:text-3xl text-2xl text-center lg:text-start font-semibold text-black'>Get Real Instagram Live Stream Views from 100% Real and Active Users</h3>
                        <p className='lg:text-xl text-lg text-center lg:text-start font-medium text-black'>We provide Real and Non-Drop Instagram Live Stream Views for life-time</p>
                    </div>
                    <ServiceCardForLive packageData={igLiveViewsData} serviceName={"Instagram Live Views"} placeholder={"Please enter ig live link"} />
                </div>
            </div>
            {/* package section end */}
        </div>
    )
}

export default InstagramLiveViewsPage