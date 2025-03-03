import React, { useState, useEffect } from 'react';
import { PiGitPullRequestLight } from "react-icons/pi";

const LoadingAnimation = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [index, setIndex] = useState(0);
    const loadingMessages = [
        "//Initializing login sequence...",
        "//Fetching user data: 100% (1/1), done.",
        "//Authenticating credentials: 100% (2/2), done.",
        "//Encrypting session token using SHA-256...",
        "//Verifying secure connection: 100% (1/1), done.",
        "//Writing session data: 100% (3/3), 1.2 KiB | 1.20 MiB/s, done.",
        "//remote: Validating access tokens...",
        "//remote: Syncing with authentication server: 100% (4/4), completed with 4 encrypted packets.",
        "//remote: Login successful 👍. Redirecting..."
    ];

    useEffect(() => {
        if (index < loadingMessages.length) {
            const timer = setTimeout(() => {
                setLines((prevLines) => [...prevLines, loadingMessages[index]]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 700); // Adjust speed here (700ms per line)
            return () => clearTimeout(timer);
        } else if (onComplete) {
            onComplete(); // Trigger onComplete when all lines are shown
        }
    }, [index]); // Depend on 'index' so it updates each time


    return (
        <div className="flex flex-col justify-center items-center w-full h-full font-mono text-xs sm:text-sm   bg-gray-100 p-4">
            <div className='sm:w-[52%] w-[95%]'>
                <PiGitPullRequestLight className='size-7'/>
                {lines.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        </div>
    );
};

export default LoadingAnimation;
