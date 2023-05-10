import {
    Swiper,
    SwiperSlide, SwiperRef
} from 'swiper/react';

import pathLeft from "@assets/videos/path-1-left.webm"
import pathCenter from "@assets/videos/path-2-center.webm"
import pathRight from "@assets/videos/path-3-right.webm"
import pathFull from "@assets/videos/path-full.webm"
import pathFullWide from "@assets/videos/path-full-extra.webm"

import pathLeftExtra from "@assets/videos/path-1-left.mp4"
import pathCenterExtra from "@assets/videos/path-2-center.mp4"
import pathRightExtra from "@assets/videos/path-3-right.mp4"
import pathFullExtra from "@assets/videos/path-full.mp4"
import pathFullWideExtra from "@assets/videos/path-full-extra.mp4"

import ellipseViolet from "@assets/images/ellipse-violet.svg";
import ellipseOrange from "@assets/images/ellipse-orange.svg";
import {useRef, useEffect, useState} from "react";
import {useIntersectionObserver} from "../../hooks/intersectionObserver";
import {useLockedBody} from "../../hooks/useLockedBody";
import {useTouch} from "../../hooks/useTouch";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


function ClientPath() {
    const triggerTop = useRef<HTMLDivElement | null>(null);
    const triggerBottom = useRef<HTMLDivElement | null>(null);
    const swiperRef = useRef<SwiperRef | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const entryTop = useIntersectionObserver(triggerTop, {});
    const entryBottom = useIntersectionObserver(triggerBottom, {});

    const isVisible = !!entryBottom?.isIntersecting;
    const [locked, setLocked] = useLockedBody(false, 'root');
    const [isHiddenOverlay, setIsHiddenOverlay] = useState(true);

    useEffect(() => {
        document.addEventListener('touchstart', (e) => {
            const isActive = document.querySelector("body").classList.contains('active')

            if (!isActive) return;

            e.preventDefault()
        }, {passive: false});

        document.addEventListener('touchmove', (e) => {
            const isActive = document.querySelector("body").classList.contains('active')

            if (!isActive) return;

            e.preventDefault()
        }, {passive: false});
    }, []);

    useEffect(() => {

    }, []);

    useTouch(swiperRef, (direction) => {
        console.log(direction)
        switch (direction) {
            case "up": {
                swiperRef.current?.swiper.slideNext();
                break;
            }
            case "down": {
                swiperRef.current?.swiper.slidePrev();
                break;
            }
            default: {
                break;
            }
        }
    })

    useEffect(() => {
        if (entryBottom?.isIntersecting) {
            document.querySelector("body").classList.add("active");
        }
        // enableBodyScroll(document.querySelector('body'));
        if (entryBottom?.isIntersecting) {
            const storedRequestAnimationFrame = window.requestAnimationFrame;

            window.requestAnimationFrame = () => 42;
            disableBodyScroll(modalRef?.current);
            window.requestAnimationFrame = storedRequestAnimationFrame;

            // enableBodyScroll(element);
            // disableBodyScroll(document.querySelector('html'))
            disableBodyScroll(modalRef?.current)
            setIsHiddenOverlay(false)
        }
    }, [entryBottom?.isIntersecting]);

    console.log(`trigger is ${ isVisible }`)

    return (
        <div>
            <div ref={triggerTop}/>
            <Swiper
                className="h-screen overflow-hidden w-full swiper-backface-hidden"
                spaceBetween={0}
                ref={swiperRef}
                slidesPerView={"auto"}
                centeredSlides
            >
                <SwiperSlide
                    className="relative rounded-tl-3xl rounded-bl-3xl overflow-hidden w-[100vw] bg-[#F5EFF1]">
                    <div
                        className="absolute z-10 w-[100rem] -left-[82rem] -top-[15rem] rotate-45">
                        <img src={ellipseViolet.src} alt="violet" className="object-contain"/>
                    </div>

                    <div
                        className="absolute z-10 w-[100rem] -left-[84rem] -top-[43rem] rotate-45">
                        <img src={ellipseOrange.src} alt="orange" className="object-contain"/>
                    </div>

                    <p className="text-slide-heading absolute top-[1.5rem] left-5 z-10">Own digital sales <br/>channels</p>

                    <video className="top-0 left-0 min-h-full min-w-full object-contain object-video-frame-mobile" loop autoPlay muted
                           playsInline>
                        <source src={pathLeft} type="video/webm"/>
                        <source src={pathLeftExtra} type="video/mp4"/>
                    </video>

                    <div className="z-10 container absolute left-1/2 -translate-x-2/4 bottom-8 flex flex-col gap-2 w-full">
                        <p className="text-[1.25rem] font-bold grow text-accent-orange">Full customer experience control</p>
                        <p className="text-[1.25rem] font-regular grow">Our app, website, kiosk and POS with automated marketing personalization sends orders directly to kitchen.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className="overflow-hidden w-[100vw] bg-[#F5EFF1]">

                    <p className="text-slide-heading absolute top-[1.5rem] left-5 z-10">Smart pizzeria <br/>and delivery</p>

                    <video className="top-0 left-0 min-h-full min-w-full object-contain object-video-frame-mobile" loop autoPlay muted
                           playsInline>
                        <source src={pathCenter} type="video/webm"/>
                        <source src={pathCenterExtra} type="video/mp4"/>
                    </video>

                    <div className="container absolute left-1/2 -translate-x-2/4 bottom-8 flex flex-col gap-2 w-full">
                        <p className="text-[1.25rem] font-bold grow text-accent-orange">Consistent quality and total manageability</p>
                        <p className="text-[1.25rem] font-regular grow">Digitalizes every process, including order tracking, supply forecasts, delivery, HR and P&L management.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className="rounded-tr-3xl rounded-br-3xl overflow-hidden w-[100vw] bg-[#F5EFF1]">

                    <p className="text-slide-heading absolute top-[1.5rem] left-5 z-10">Central multiple-store <br/>management</p>

                    <video className="top-0 left-0 min-h-full min-w-full object-contain object-video-frame-mobile" loop autoPlay muted
                           playsInline>
                        <source src={pathRight} type="video/webm"/>
                        <source src={pathRightExtra} type="video/mp4"/>
                    </video>

                    <div className="container absolute left-1/2 -translate-x-2/4 bottom-8 flex flex-col gap-2 w-full">
                        <p className="text-[1.25rem] font-bold grow text-accent-orange">Full transparency and fast scaling</p>
                        <p className="text-[1.25rem] font-regular grow">Platform connects all the processes in all stores together, allowing to manage everything from one center with total reliance on data.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="w-screen h-screen bg-red-400 fixed top-0 left-0 z-40 opacity-20" ref={modalRef} hidden={isHiddenOverlay}>

            </div>

            <div ref={triggerBottom}/>
        </div>
    )
}

export default ClientPath
