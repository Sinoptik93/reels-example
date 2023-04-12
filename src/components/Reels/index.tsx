import {useState, useEffect} from 'react'
import { Pagination } from 'swiper';

import videomp4 from "@assets/videos/short-1.mp4"
import videowebm from "@assets/videos/short-1.webm"
import videomp42 from "@assets/videos/short-2.mp4"
import videowebm2 from "@assets/videos/short-2.webm"
import videomp43 from "@assets/videos/short-3.mp4"
import videowebm3 from "@assets/videos/short-3.webm"
import videomp44 from "@assets/videos/short-4.mp4"
import videowebm4 from "@assets/videos/short-4.webm"
import videomp45 from "@assets/videos/short-5.mp4"
import videowebm5 from "@assets/videos/short-5.webm"
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';


function Reels() {
    const [count, setCount] = useState(0)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      setIsMobile(document.body.offsetWidth < 640)
    }, []);

    return (
        <Swiper
            className={`custom ${isMobile ? "" : "container"} h-[95vh] pt-20 pb-8 desktop:pb-[7rem] tablet:h-[32.5rem] desktop:h-[90vh] desktop:min-h-[70rem] mb-20 overflow-hidden w-full swiper-backface-hidden`}
            spaceBetween={isMobile ? 30 : 23}
            slidesPerView={isMobile ? 1 : "auto"}
            centeredSlides
            loop
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => {
                const currentIndex = swiper.activeIndex;
                const prevIndex = swiper.previousIndex;
                const currentSlide = swiper.slides[currentIndex].querySelector("video");
                const prevSlide = swiper.slides[prevIndex].querySelector("video");

                currentSlide?.play();
                prevSlide?.pause();
            }}
        >
            <SwiperSlide className="rounded-2xl overflow-hidden tablet:w-[95vw] desktop:w-[40rem]">
                <video className="top-0 left-0 min-h-full min-w-full object-cover" loop autoPlay muted playsInline >
                    <source src={videowebm} type="video/webm"/>
                    <source src={videomp4} type="video/mp4"/>
                </video>
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden tablet:w-[95vw] desktop:w-[40rem]">
                <video className="top-0 left-0 min-h-full min-w-full object-cover" loop muted playsInline>
                    <source src={videowebm2} type="video/webm"/>
                    <source src={videomp42} type="video/mp4"/>
                </video>
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden tablet:w-[95vw] desktop:w-[40rem]">
                <video className="top-0 left-0 min-h-full min-w-full object-cover" loop muted playsInline>
                    <source src={videowebm3} type="video/webm"/>
                    <source src={videomp43} type="video/mp4"/>
                </video>
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden tablet:w-[95vw] desktop:w-[40rem]">
                <video className="top-0 left-0 min-h-full min-w-full object-cover" loop muted playsInline>
                    <source src={videowebm4} type="video/webm"/>
                    <source src={videomp44} type="video/mp4"/>
                </video>
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden tablet:w-[95vw] desktop:w-[40rem]">
                <video className="top-0 left-0 min-h-full min-w-full object-cover" loop autoPlay muted playsInline >
                    <source src={videowebm5} type="video/webm"/>
                    <source src={videomp45} type="video/mp4"/>
                </video>
            </SwiperSlide>
        </Swiper>
    )
}

export default Reels
