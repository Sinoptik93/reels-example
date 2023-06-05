import {useEffect, useRef} from "react";
// @ts-ignore
import videojs, {VideoJsPlayer, VideoJsPlayerOptions} from 'video.js';

interface VideoPlayerProps {
    options: VideoJsPlayerOptions;
    onReady?: (player: VideoJsPlayer) => void;
}
export const VideoPlayer = ({options, onReady}: VideoPlayerProps) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<VideoJsPlayer | null>(null);

    useEffect(() => {
        if (!playerRef.current && videoRef.current) {
            const videoElement = document.createElement("video-js");
            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });
        } else if(playerRef.current) {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, onReady]);

    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div data-vjs-player className="w-full h-full flex justify-center items-center">
            <div ref={videoRef} className="h-fit w-full"/>
        </div>
    );
}

export default VideoPlayer;
