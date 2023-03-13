import {useState} from 'react'
import './App.scss'
import videomp4 from "./assets/short-1.mp4"
import videowebm from "./assets/short-1.webm"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';

function App() {
    const [count, setCount] = useState(0)

    return (
        <Swiper
            className="container h-[520px] overflow-hidden w-[400px]"
            spaceBetween={10}
            slidesPerView={"auto"}
            centeredSlides
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop
        >
            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px] relative">
                <div className="orange-circle"/>
                <div className="violet-circle"/>

                <video className="fixed top-0 left-0 min-h-full min-w-full" loop autoPlay muted >
                    <source src={videowebm} type="video/webm"/>
                    {/*<source src={videomp4} type="video/mp4"/>*/}
                </video>
                t
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px]">
                <div className="orange-circle"/>
                <div className="violet-circle"/>

                <video className="fixed top-0 left-0 min-h-full min-w-full" loop autoPlay muted >
                    <source src={videowebm} type="video/webm"/>
                    {/*<source src={videomp4} type="video/mp4"/>*/}
                </video>
                t
            </SwiperSlide>


            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px]">
                <div className="orange-circle"/>
                <div className="violet-circle"/>

                <video className="fixed top-0 left-0 min-h-full min-w-full" loop autoPlay muted >
                    <source src={videowebm} type="video/webm"/>
                    {/*<source src={videomp4} type="video/mp4"/>*/}
                </video>
                t
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px]">
                <div className="orange-circle"/>
                <div className="violet-circle"/>

                <video className="fixed top-0 left-0 min-h-full min-w-full" loop autoPlay muted >
                    <source src={videowebm} type="video/webm"/>
                    {/*<source src={videomp4} type="video/mp4"/>*/}
                </video>
                t
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px]">

                <div className="orange-circle"/>
                <div className="violet-circle"/>

                <video className="fixed top-0 left-0 min-h-full min-w-full" loop autoPlay muted >
                    <source src={videowebm} type="video/webm"/>
                    {/*<source src={videomp4} type="video/mp4"/>*/}
                </video>
                t
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px]">
                <div className="orange-circle"/>
                <div className="violet-circle"/>

                <video className="fixed top-0 left-0 min-h-full min-w-full" loop autoPlay muted >
                    <source src={videowebm} type="video/webm"/>
                    {/*<source src={videomp4} type="video/mp4"/>*/}
                </video>
                t
            </SwiperSlide>

            <SwiperSlide className="rounded-2xl overflow-hidden w-[320px] h-[480px]">

                <div className="orange-circle"/>
                <div className="violet-circle"/>

                <video className="fixed top-0 left-0 min-h-full min-w-full" loop autoPlay muted >
                    <source src={videowebm} type="video/webm"/>
                    {/*<source src={videomp4} type="video/mp4"/>*/}
                </video>
                t
            </SwiperSlide>
        </Swiper>
    )
}

export default App
