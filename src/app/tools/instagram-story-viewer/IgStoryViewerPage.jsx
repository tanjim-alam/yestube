"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaDownload } from 'react-icons/fa';
import { CiWarning } from "react-icons/ci";
import axios from 'axios';

function IgStoryViewerPage() {
    const [url, setUrl] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);  // State to track loading status

    // Function to fetch Instagram story data
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) {
            setError('Please enter a valid Instagram URL');
            return;
        }

        setLoading(true);  // Start loading

        try {
            const response = await axios.get(`/api/ig-story-viewer?url=${encodeURIComponent(url)}`);

            if (response.status === 200) {
                const data = response.data; // Get the data from the response

                if (data.success && data.stories && data.stories.length > 0) {
                    // Extract video_versions of type 103
                    console.log("data.stories", data.stories)
                    setData(data.stories)
                } else {
                    setError('No stories found');
                }
            } else {
                setError('Failed to fetch Instagram story');
            }
        } catch (err) {
            console.error('Error:', err); // Log the error for debugging
            setError(err.message);
        } finally {
            setLoading(false);  // Stop loading when the request is complete
        }
    };

    function downloadVideo(storyLink) {
        const link = document.createElement('a');
        link.href = `${storyLink}/`;
        link.setAttribute('download', 'Reel'); // Ensuring the download attribute is set
        link.download = 'instagram_reel.mp4'; // Setting the desired file name
        document.body.appendChild(link);
        link.click();
        link.remove(); // Clean up the element after clicking

    }
    return (
        <div className='w-full bg-white py-16'>
            <div className='lg:w-[80%] md:w-[80%] w-[95%] m-auto'>
                <div className='lg:w-[80%] m-auto'>
                    <h1 className='text-3xl font-semibold text-black text-center'>Instagram Story Viewer – Explore Profiles Without a Trace</h1>
                    <p className='mt-6 leading-normal text-[18px] text-center text-neutral-800'>
                        Discover the freedom of viewing Instagram stories anonymously with our Instagram Story Viewer. This tool helps you to view content from any public account without compromising your privacy your identity.
                    </p>
                    <form onSubmit={handleSubmit} className='w-full flex border-2 p-1 rounded-full mt-10 border-black'>
                        <input type="text"
                            placeholder='Enter Link here'
                            className='w-full p-3 text-black outline-none border-none rounded-full text-lg'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button
                            className='bg-primary text-white rounded-full py-2 px-6'
                            type='submit'
                        >
                            DOWNLOAD
                        </button>
                    </form>
                    <div className='flex justify-center p-3'>
                        <div className='lg:flex grid grid-cols-4 gap-8 lg:gap-16'>
                            <Link href={"#"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg xmlns="" className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-blue-400" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                                </svg>
                                <p className='text-sm'>Reels</p>
                            </Link>
                            <Link href={"#"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-green-500" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                    <path strokelinecap="round" strokelinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p className='text-sm'>Stories</p>
                            </Link>
                            <Link href={"#"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-pink-600" viewBox="0 0 24 24" fill="none">
                                    <path d="M10 3 6 21M18 3l-4 18M4 8h17M3 16h17" strokewidth="2" strokelinecap="round" strokelinejoin="round"></path>
                                </svg>
                                <p className='text-sm'>Hashtag</p>
                            </Link>
                            <Link href={"#"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto stroke-2 rounded-md border border-gray-200 p-1 stroke-amber-500" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                                <p className='text-sm'>Videos</p>
                            </Link>
                            <Link href={"#"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-purple-500" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-5-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <p className='text-sm'>Photo</p>
                            </Link>
                            <Link href={"#"} className='flex flex-col justify-center items-center gap-0 p-0'>
                                <svg className="h-10 w-10 m-auto rounded-md border border-gray-200 p-1 stroke-2 stroke-cyan-500" fill="none" viewBox="0 0 24 24">
                                    <path strokelinecap="round" strokelinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                                </svg>
                                <p className='text-sm'>Audio</p>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-center '>
                        {
                            loading ? (
                                <div className='flex justify-center mt-14'>
                                    <div className="loaderContainer flex flex-col items-center">
                                        <div className="loader"></div>
                                        <div className='mt-4'>
                                            <p
                                                className='bg-[#fff3cd] border p-2 text-gray-500 flex items-center gap-1'
                                            ><CiWarning className='text-xl' /> Our tools may work with delay due to security measures. After entering your information, you have to wait 1-2 minutes.                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ) :
                                <div>
                                    {error ? (
                                        <div>
                                            <p className='text-center text-lg font-semibold text-primary'>{error}</p>
                                        </div>
                                    ) :
                                        <div className='flex justify-center items-center w-full'>
                                            <div className='grid grid-cols-3 items-center justify-center w-full gap-3'>
                                                {
                                                    data ? data?.map((story, i) => (
                                                        <div key={i}>
                                                            <video width="300" height="800" controls className='h-[500px]'>
                                                                <source src={story?.url} type="video/mp4" />
                                                            </video>
                                                            <div className='w-[300px] mt-2'>
                                                                <button
                                                                    className='bg-primary p-3 w-full text-lg font-semibold text-white flex items-center justify-center gap-1'
                                                                    style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}
                                                                    onClick={() => downloadVideo(story?.url)}
                                                                >
                                                                    <FaDownload />
                                                                    Download
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )) :
                                                        null
                                                }
                                            </div>
                                        </div>

                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IgStoryViewerPage