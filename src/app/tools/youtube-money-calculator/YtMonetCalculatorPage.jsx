"use client"
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import React, { useState } from 'react';
import countries from "../../constant/general/countries.json"

function YtMonetCalculatorPage() {
    const [url, setUrl] = useState('');
    const [channelData, setChannelData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const channelId = await extractChannelId(url);
        setIsLoading(true)
        if (channelId) {
            setIsLoading(true)
            fetchChannelData(channelId);
        } else {
            setIsLoading(false)
            setError('Invalid YouTube URL');
        }
    };

    const extractChannelId = async (url) => {
        let channelId = null;
        if (url.includes('/channel/')) {
            channelId = url.split('/channel/')[1].split('/')[0];
        } else if (url.includes('/c/') || url.includes('/user/') || url.includes('/@')) {
            setIsLoading(true)
            const response = await fetch(`/api/getChannelId?url=${url}`);
            const data = await response.json();
            channelId = data.channelId;
        }
        setIsLoading(false)
        return channelId;
    };

    const fetchChannelData = async (channelId) => {
        const response = await fetch(`/api/channel?channelId=${channelId}`);
        const data = await response.json();
        setChannelData(data);
        setIsLoading(false)
    };

    function getCountryName(code) {
        const country = countries.find((c) => c.code === code);
        return country ? country.country : "Unknown country code";
    }
    return (
        <div className='w-full bg-white py-16'>
            <div className='lg:w-[80%] md:w-[80%] w-[95%] m-auto'>
                <div className='lg:w-[80%] m-auto'>
                    <h1 className='text-3xl font-semibold text-black text-center'>YouTube Money Calculator: How Much Do YouTubers Make (Updated for 2024)</h1>
                    <p className='mt-6 leading-normal text-[18px] text-center text-neutral-800'>
                        Made by YouTubers for YouTubers ♡
                    </p>
                    <p className='mt-6 leading-normal text-[18px] text-center text-neutral-800'>
                        Check out the YouTube money calculator, an easy-to-use online tool that will tell creators how much money their channel can make.
                    </p>
                    <form onSubmit={handleSubmit} className='w-full flex border-2 p-1 rounded-full mt-6 border-black'>
                        <input type="text"
                            placeholder='Enter YouTube URL here'
                            className='w-full p-3 text-black outline-none border-none rounded-full text-lg'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button className='bg-primary text-white rounded-full py-2 px-6'>SEARCH</button>
                    </form>
                </div>
                <div>
                    {
                        isLoading ? <p>Fetching</p>
                            : <div>
                                {channelData ? (
                                    <div
                                        className='mt-40 rounded-md'
                                        style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}
                                    >
                                        <div className='flex justify-center relative bottom-16'>
                                            <div className='flex flex-col justify-center items-center'>
                                                <div className=' bg-white rounded-full'>
                                                    <img
                                                        src={channelData?.profileImageUrl || "https://yt3.googleusercontent.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s900-c-k-c0x00ffffff-no-rj"}
                                                        className='w-[130px] rounded-full'
                                                        alt="" />
                                                </div>
                                                <h4 className='text-xl font-semibold mt-1'>{channelData?.title}</h4>
                                            </div>
                                        </div>
                                        <div className='px-12 pb-4 grid grid-cols-1 lg:grid-cols-3 justify-between gap-8'>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Total subscribers</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{channelData?.subscribers}</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Est. YouTube partner earnings (monthly)</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>${channelData?.earnings}</p>
                                                <p className='text-primary font-bold mt-2'>CPM: $0.96</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Est. Sponsorships price (each video)</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>${channelData?.sponsorship}</p>
                                                <p className='text-primary font-bold mt-2'>CPM: $0.96</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Total views</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{channelData?.views}</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Total Videos</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{channelData?.videoCount}</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Channel's Creation Date</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{formatDate(channelData?.publishedAt)}</p>
                                            </div>
                                            <div>
                                                <p className='text-lg text-neutral-700'>Channel's Country</p>
                                                <p className='lg:text-4xl text-3xl font-bold mt-2'>{getCountryName(channelData?.country)}</p>
                                            </div>
                                        </div>
                                        <div className='mt-5 flex flex-col gap-5 lg:flex-row justify-between px-8 lg:px-20 pb-7'>
                                            <Link
                                                href="/buy-youtube-subscribers"
                                                className='bg-primary py-3 px-9 text-center rounded-full text-lg text-white font-semibold'
                                            >Boost Subscribers
                                            </Link>
                                            <Link
                                                href="/buy-youtube-views"
                                                className='bg-primary py-3 px-9 text-center rounded-full text-lg text-white font-semibold'
                                            >Buy Views
                                            </Link>
                                            <Link
                                                href="/buy-youtube-likes"
                                                className='bg-primary py-3 px-9 text-center rounded-full text-lg text-white font-semibold'
                                            >Buy Likes
                                            </Link>
                                            <Link
                                                href="/buy-youtube-comments"
                                                className='bg-primary py-3 px-9 text-center rounded-full text-lg text-white font-semibold'
                                            >Buy Comments
                                            </Link>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default YtMonetCalculatorPage