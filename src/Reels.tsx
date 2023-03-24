import {useState, FC, createRef} from 'react'
import 'swiper/swiper-bundle.min.css';
import './App.scss'
import videomp4 from "./assets/short-1.mp4"
import videowebm from "./assets/short-1.webm"
import videomp42 from "./assets/short-2.mp4"
import videowebm2 from "./assets/short-2.webm"
import videomp43 from "./assets/short-3.mp4"
import videowebm3 from "./assets/short-3.webm"
import videomp44 from "./assets/short-4.mp4"
import videowebm4 from "./assets/short-4.webm"
import videomp45 from "./assets/short-5.mp4"
import videowebm5 from "./assets/short-5.webm"
// import overlay from "./assets/overlay.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide, SwiperRef, SwiperProps} from 'swiper/react';



function Reels() {
    const [count, setCount] = useState(0)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // const refsList = Array.from(Array(5).keys()).map((item) => createRef<HTMLVideoElement>());

    return (
        <Swiper
            className="container h-[520px] overflow-hidden max-w-[400px] w-full swiper-backface-hidden"
            spaceBetween={10}
            slidesPerView={"auto"}
            centeredSlides
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
            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px] relative">
                {
                    isMobile
                        ? null
                        : (
                            <>
                                <div className="orange-circle"/>
                                <div className="violet-circle"/>
                            </>
                        )
                }

                <video className="top-0 left-0 min-h-full min-w-full" loop autoPlay muted playsInline >
                    <source src={videowebm} type="video/webm"/>
                    <source src={videomp4} type="video/mp4"/>
                </video>
                t
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px]">
                {
                    isMobile
                        ? null
                        : (
                            <>
                                <div className="orange-circle"/>
                                <div className="violet-circle"/>
                            </>
                        )
                }

                <video className="top-0 left-0 min-h-full min-w-full" loop muted playsInline>
                    <source src={videowebm2} type="video/webm"/>
                    <source src={videomp42} type="video/mp4"/>
                </video>
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px]">
                <video className="top-0 left-0 min-h-full min-w-full" loop muted playsInline>
                    <source src={videowebm4} type="video/webm"/>
                    <source src={videomp44} type="video/mp4"/>
                </video>
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px]">
                <video className="top-0 left-0 min-h-full min-w-full" loop muted playsInline>
                    <source src={videowebm5} type="video/webm"/>
                    <source src={videomp45} type="video/mp4"/>
                </video>
            </SwiperSlide>
        </Swiper>
    )
}

export default Reels
