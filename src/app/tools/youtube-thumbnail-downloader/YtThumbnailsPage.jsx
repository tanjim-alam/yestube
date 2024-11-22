"use client"
import React, { useState } from 'react'

function YtThumbnailsPage() {
    const [url, setUrl] = useState('');
    const [thumbnails, setThumbnails] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Extract video ID from URL
        const videoId = url.split('v=')[1];
        if (videoId) {
            fetchThumbnails(videoId);
        }
    };

    const fetchThumbnails = async (videoId) => {
        const thumbnailUrls = [
            `https://img.youtube.com/vi/${videoId}/0.jpg`,
            `https://img.youtube.com/vi/${videoId}/1.jpg`,
            `https://img.youtube.com/vi/${videoId}/2.jpg`,
        ];
        setThumbnails(thumbnailUrls);
    };
    console.log("thumbnails", thumbnails)
    return (
        <div className='w-full bg-white py-10'>
            <div className='w-[80%] m-auto'>
                <div className='w-[80%] m-auto'>
                    <h1 className='text-3xl font-semibold text-black text-center'>YouTube Thumbnail Downloader</h1>
                    <p className='mt-4 leading-normal text-[18px] text-center text-neutral-800'>
                        The free online tool, YouTube Thumbnail Downloader, is the easiest way to grab YouTube
                        video thumbnails in HD quality. Also, you can use this tool to Download YouTube
                        Banners for free. To download the video thumbnail, enter the video URL;
                        to download the channel banner enter the channel URL.
                    </p>
                    <form onSubmit={handleSubmit} className='w-full flex border-2 p-1 rounded-full mt-4 border-black'>
                        <input type="text"
                            placeholder='Enter YouTube URL here'
                            className='w-full p-3 text-black outline-none border-none rounded-full text-lg'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button className='bg-primary text-white rounded-full py-2 px-6'>SEARCH</button>
                    </form>
                </div>
                {thumbnails.length > 0 ? (
                    <div className='p-7 mt-10 flex gap-4 rounded-md'
                        style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                        <div className='w-[70%]'>
                            <div className='p-7 rounded-md' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                                <img
                                    className=' rounded-md w-full'
                                    src={thumbnails[0] || "https://img.youtube.com/vi/YIECFZb1IxQ/maxresdefault.jpg"} alt="" />
                                <div className='flex items-center justify-between mt-4'>
                                    <h6 className='text-2xl font-semibold text-black'>Video Thumbnail</h6>
                                    <a
                                        href={thumbnails[0]}
                                        className=' bg-secondary py-3 px-4 rounded-md text-white text-xl'
                                    >Download</a>
                                </div>
                            </div>

                        </div>
                        <div className='w-[30%]'>
                            <div className='flex flex-col gap-7 justify-between'>
                                {thumbnails.slice(1).map((thumbnail, index) => (
                                    <div key={index}>
                                        <img
                                            className='w-full rounded-md'
                                            src={thumbnail} alt="" />
                                        <a
                                            href={"img.youtube.com/vi/YIECFZb1IxQ/1.jpg"}
                                            className='w-full bg-secondary text-white mt-2 p-1 rounded-md text-lg' download>
                                            Download
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default YtThumbnailsPage