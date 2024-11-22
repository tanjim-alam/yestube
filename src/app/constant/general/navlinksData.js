import {
    FaYoutube, FaFacebook, FaInstagramSquare, FaTwitter, FaTiktok, FaSpotify,
    FaSoundcloud, FaLinkedinIn, FaPinterest, FaSnapchatGhost, FaRedditAlien, FaTwitch
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const navlinksData = [
    {
        id: 1,
        name: "YouTube",
        icon: FaYoutube,
        services: [
            { id: 1, title: "YouTube Views", slug: "youtube-views" },
            { id: 2, title: "YouTube Subscribers", slug: "youtube-subscribers" },
            { id: 3, title: "YouTube Likes", slug: "youtube-likes" },
            { id: 4, title: "YouTube Short Views", slug: "youtube-short-views" },
            { id: 5, title: "YouTube Comments", slug: "youtube-comments" },
            { id: 6, title: "YouTube Live Views", slug: "youtube-live-stream-views-viewers" },
        ],
        color: "red"
    },
    {
        id: 2,
        name: "Facebook",
        icon: FaFacebook,
        services: [
            { id: 1, title: "Facebook Followers", slug: "facebook-followers" },
            { id: 2, title: "Facebook Likes", slug: "facebook-likes" },
            { id: 3, title: "Facebook Video Views", slug: "facebook-video-views" },
            { id: 4, title: "Facebook Comments", slug: "facebook-comments" },
            { id: 5, title: "Facebook Page Likes", slug: "facebook-page-likes" },
            { id: 6, title: "Facebook Live Views", slug: "facebook-live-stream-views-viewers" }
        ],
        color: "#0b82e8"
    },
    {
        id: 3,
        name: "Instagram",
        icon: FaInstagramSquare,
        services: [
            { id: 1, title: "Instagram Followers", slug: "instagram-followers" },
            { id: 2, title: "Instagram Likes", slug: "instagram-likes" },
            { id: 3, title: "Instagram Reels Likes", slug: "#" },
            { id: 4, title: "Instagram Reels Views", slug: "#" },
            { id: 5, title: "Instagram Comments", slug: "instagram-comments" },
            { id: 6, title: "Instagram Story Views", slug: "#" },
            { id: 7, title: "Instagram Target Likes", slug: "#" },
            { id: 8, title: "Instagram Target Followers", slug: "#" },
            { id: 9, title: "Instagram Live Views", slug: "#" },
        ],
        color: "#fb3c44"
    },
    {
        id: 4,
        name: "Twitter (X)",
        icon: FaTwitter,
        services: [
            { id: 1, title: "Twitter (X) Followers", slug: "#" },
            { id: 2, title: "Twitter (X) Likes", slug: "#" },
            { id: 3, title: "Twitter (X) Retweets", slug: "#" },
            { id: 4, title: "Twitter (X) Video Views", slug: "#" },
        ],
        color: "#1DA1F2"
    },
    {
        id: 5,
        name: "TikTok",
        icon: FaTiktok,
        services: [
            { id: 1, title: "TikTok Followers", slug: "#" },
            { id: 2, title: "TikTok Likes", slug: "#" },
            { id: 3, title: "TikTok Views", slug: "#" },
            { id: 4, title: "TikTok Comments", slug: "#" },
        ],
        color: "#000000"
    },
    {
        id: 6,
        name: "Spotify",
        icon: FaSpotify,
        services: [
            { id: 1, title: "Spotify Followers", slug: "#" },
            { id: 2, title: "Spotify Plays", slug: "#" }
        ],
        color: "#1DB954"
    },
    {
        id: 7,
        name: "SoundCloud",
        icon: FaSoundcloud,
        services: [
            { id: 1, title: "SoundCloud Followers", slug: "#" },
            { id: 2, title: "SoundCloud Plays", slug: "#" },
        ],
        color: "#FF5500"
    },
    {
        id: 8,
        name: "LinkedIn",
        icon: FaLinkedinIn,
        services: [
            { id: 1, title: "LinkedIn Followers", slug: "#" },
            { id: 2, title: "LinkedIn Connections", slug: "#" },
            { id: 3, title: "LinkedIn Likes", slug: "#" },
        ],
        color: "#0A66C2"
    },
    {
        id: 9,
        name: "Pinterest",
        icon: FaPinterest,
        services: [
            { id: 1, title: "Pinterest Followers", slug: "#" },
            { id: 2, title: "Pinterest Repins", slug: "#" },
            { id: 2, title: "Pinterest Reactions", slug: "#" },
            { id: 2, title: "Pinterest Likes", slug: "#" },
        ],
        color: "#E60023"
    },
    {
        id: 10,
        name: "Snapchat",
        icon: FaSnapchatGhost,
        services: [
            { id: 1, title: "Snapchat Followers", slug: "#" },
            { id: 2, title: "Snapchat Likes", slug: "#" },
        ],
        color: "#FFFC00"
    },
    {
        id: 11,
        name: "Threads",
        icon: FaSquareThreads,
        services: [
            { id: 1, title: "Threads Followers", slug: "#" },
            { id: 2, title: "Threads likes", slug: "#" },
            { id: 3, title: "Threads Comments", slug: "#" },
        ],
        color: "#0a0a0a"
    },
    {
        id: 12,
        name: "Twitch",
        icon: FaTwitch,
        services: [
            { id: 1, title: "Twitch Followers", slug: "#" },
            { id: 2, title: "Twitch Views", slug: "#" },
            { id: 2, title: "Twitch Live Viewers", slug: "#" },
        ],
        color: "#9146FF"
    }
];

export default navlinksData