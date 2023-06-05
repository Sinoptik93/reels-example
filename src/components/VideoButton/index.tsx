import { useState } from "react";
import { createPortal } from 'react-dom';
//@ts-ignore
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import 'video.js/dist/video-js.css';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from '@components/VideoPlayer'
import RickVideoWebM from "@assets/videos/rick-astley.webm"
import RickVideo from "@assets/videos/rick-astley.mp4"

// @ts-ignore
import type {VideoJsPlayer} from "video.js";

const VideoButton = () => {
    const [showVideo, setShowVideo] = useState(false);

    const playerOptions: VideoJsPlayerOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        preload: "auto",
        sources: [
            {
                src: RickVideoWebM,
                type: 'video/webm'
            },
            {
                src: RickVideo,
                type: 'video/mp4'
            }
        ]
    };

    const handlePlayerReady = (player: VideoJsPlayer) => {
        // console.log(player);
        player.requestFullscreen();

        player.on('exitfullscreen', function() {
            player.pause()
            setShowVideo(false);
        });
        console.log(player);
    };

    const portalRoot = document.getElementById("root");

    return (
        <div>
            <button
                onClick={() => setShowVideo(true)}
                className="absolute translate-z-0 top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4 p-3 rounded-[7.5rem] flex items-center bg-white text-accent-orange transition-all tablet:p-4 desktop:p-4 hover:scale-[1.1]"
            >
                <div className="bg-accent-orange text-white rounded-full flex items-center justify-center w-[4rem] h-[4rem] mr-[0.9375rem] desktop:w-[4.75rem] desktop:h-[4.75rem] desktop:ml-[0.4375rem]">
                    <svg
                        width="29"
                        height="34"
                        viewBox="0 0 29 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                    >
                        <path
                            d="M4.6292 0.464046L27.698 14.722C29.434 15.797 29.434 18.2329 27.698 19.2723L4.6292 33.5309C2.66179 34.7485 0 33.459 0 31.2376V2.75666C0 0.570934 2.66179 -0.754207 4.6292 0.464046Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <p className="text-[1rem] tablet:text-[1.5rem] desktop:text-[2rem] text-black font-regular text-left leading-custom whitespace-nowrap mr-[1.125rem] ">
                    How we reinvented<br /> pizza franchising
                </p>
            </button>

            {portalRoot && createPortal(
                <AnimatePresence>
                    {showVideo && (
                        <motion.div
                            className="flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: "fixed",
                                top: 0, left: 0, right: 0, bottom: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.7)"
                            }}
                        >
                            <VideoPlayer options={playerOptions} onReady={handlePlayerReady} />
                        </motion.div>
                    )}
                </AnimatePresence>,
                portalRoot
            )}
        </div>
    );
};

export default VideoButton;
