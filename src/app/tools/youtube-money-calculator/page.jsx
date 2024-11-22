"use client"
import { useState } from 'react';
import YtMonetCalculatorPage from './YtMonetCalculatorPage';

export function page() {
    const [url, setUrl] = useState('');
    const [channelData, setChannelData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const channelId = await extractChannelId(url);
        if (channelId) {
            fetchChannelData(channelId);
        } else {
            alert('Invalid YouTube URL');
        }
    };

    const extractChannelId = async (url) => {
        let channelId = null;
        if (url.includes('/channel/')) {
            channelId = url.split('/channel/')[1].split('/')[0];
        } else if (url.includes('/c/') || url.includes('/user/') || url.includes('/@')) {
            const response = await fetch(`/api/getChannelId?url=${url}`);
            const data = await response.json();
            channelId = data.channelId;
        }
        return channelId;
    };

    const fetchChannelData = async (channelId) => {
        const response = await fetch(`/api/channel?channelId=${channelId}`);
        const data = await response.json();
        setChannelData(data);
    };

    return (
        // <div className="container mx-auto p-4">
        //     <h1 className="text-2xl font-bold mb-4">YouTube Money Calculator</h1>
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             value={url}
        //             onChange={(e) => setUrl(e.target.value)}
        //             placeholder="Enter YouTube Channel URL"
        //             className="border p-2 mb-4 w-full"
        //         />
        //         <button type="submit" className="bg-blue-500 text-white p-2">
        //             Calculate Earnings
        //         </button>
        //     </form>
        //     {channelData && (
        //         <div className="mt-4">
        //             <h2 className="text-xl font-bold">{channelData.title}</h2>
        //             <p>Total subscribers: {channelData.subscribers}</p>
        //             <p>Total views: {channelData.views}</p>
        //             <p>Est. YouTube partner earnings (monthly): ${channelData.earnings}</p>
        //             <p>Est. Sponsorship price (each video): ${channelData.sponsorship}</p>
        //         </div>
        //     )}
        // </div>
        <YtMonetCalculatorPage />
    );
}

export default page;