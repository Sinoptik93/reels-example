import {useState} from 'react'
import 'swiper/swiper-bundle.min.css';
import './App.scss'
import videomp4 from "./assets/short-1.mp4"
import videowebm from "./assets/short-1.webm"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



function App() {
    const [count, setCount] = useState(0)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <Swiper
            className="container h-[520px] overflow-hidden max-w-[400px] w-full swiper-backface-hidden"
            spaceBetween={10}
            slidesPerView={"auto"}
            centeredSlides
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop
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

                <video className="top-0 left-0 min-h-full min-w-full" loop autoPlay muted playsInline>
                    <source src={videowebm} type="video/webm"/>
                    <source src={videomp4} type="video/mp4"/>
                </video>

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

                <video className="top-0 left-0 min-h-full min-w-full" loop autoPlay muted playsInline>
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

                <video className="top-0 left-0 min-h-full min-w-full" loop autoPlay muted playsInline>
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

                <video className="top-0 left-0 min-h-full min-w-full" loop autoPlay muted playsInline>
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

                <video className="top-0 left-0 min-h-full min-w-full" loop autoPlay muted playsInline>
                    <source src={videowebm} type="video/webm"/>
                    <source src={videomp4} type="video/mp4"/>
                </video>
                t
            </SwiperSlide>


        </Swiper>
    )
}

export default App
