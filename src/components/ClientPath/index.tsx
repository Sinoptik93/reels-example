import {Pagination} from 'swiper';

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

import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import ellipseViolet from "@assets/images/ellipse-violet.svg";
import ellipseOrange from "@assets/images/ellipse-orange.svg";


function ClientPath() {
    return (
        <>
            <Swiper
                className="h-[40rem] mb-20 overflow-hidden w-full swiper-backface-hidden hidden mobile:block pb-10"
                spaceBetween={0}
                slidesPerView={"auto"}
                centeredSlides
                modules={[Pagination]}
                pagination={{clickable: true}}
            >
                <SwiperSlide
                    className="relative rounded-tl-3xl rounded-bl-3xl overflow-hidden w-[100vw] bg-[#E9E3E5]">
                    <div
                        className="absolute z-10 w-[100rem] -left-[82rem] -top-[15rem] rotate-45">
                        <img src={ellipseViolet.src} alt="violet" className="object-contain"/>
                    </div>

                    <div
                        className="absolute z-10 w-[100rem] -left-[84rem] -top-[43rem] rotate-45">
                        <img src={ellipseOrange.src} alt="orange" className="object-contain"/>
                    </div>

                    <p className="text-slide-heading absolute top-[1.5rem] left-5 z-10">Own digital sales <br/>channels</p>

                    <video className="brightness-95 top-0 left-0 min-h-full min-w-full object-contain object-video-frame-mobile" loop autoPlay muted
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
                    className="overflow-hidden w-[100vw] bg-[#E9E3E5]">

                    <p className="text-slide-heading absolute top-[1.5rem] left-5 z-10 ">Smart pizzeria <br/>and delivery</p>

                    <video className="brightness-95 top-0 left-0 min-h-full min-w-full object-contain object-video-frame-mobile" loop autoPlay muted
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
                    className="rounded-tr-3xl rounded-br-3xl overflow-hidden w-[100vw] bg-[#E9E3E5]">

                    <p className="text-slide-heading absolute top-[1.5rem] left-5 z-10">Central multiple-store <br/>management</p>

                    <video className="brightness-95 top-0 left-0 min-h-full min-w-full object-contain object-video-frame-mobile" loop autoPlay muted
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

            <div className="relative mobile:hidden tablet:hidden w-full overflow-hidden">
                <div
                    className="absolute z-10 w-[300rem] -left-[135rem] -top-[66rem] rotate-90">
                    <img src={ellipseViolet.src} alt="violet"/>
                </div>

                <video className="absolute absolute-x-center -top-[10rem] w-[100vw] max-w-[130rem] desktop:h-[54.8125rem] tablet:h-[26.875rem] mx-auto mobile:hidden scale-[1.35]" loop autoPlay muted playsInline>
                    <source src={pathFullWide} type="video/webm"/>
                    <source src={pathFullWideExtra} type="video/mp4"/>
                </video>

                <div className="relative container desktop:h-[50.8125rem] tablet:h-[22.875rem] z-10">

                    <div className="flex justify-between absolute bottom-0 pb-8 w-full">
                        <div className="">
                            <div>
                                <p className="text-slide-heading mb-2">Digital sales <br/>channels</p>
                                <p className="text-[1.25rem] font-bold mb-4 text-accent-orange">Full customer experience control</p>
                                <p className="text-[1.25rem] font-regular">Our app, website, kiosk and POS with <br/>automated marketing personalization <br/>sends orders directly to kitchen.</p>
                            </div>
                        </div>

                        <div className="">
                            <div>
                                <p className="text-slide-heading mb-2">Smart pizzeria <br/>and delivery</p>
                                <p className="text-[1.25rem] font-bold mb-4 text-accent-orange">Consistent quality and total manageability</p>
                                <p className="text-[1.25rem] font-regular">Digitalizes every process, including order <br/>tracking, supply forecasts, delivery, HR <br/>and P&L management.</p>
                            </div>
                        </div>

                        <div className="">
                            <div>
                                <p className="text-slide-heading mb-2">Central multiple-store <br/>management</p>
                                <p className="text-[1.25rem] font-bold mb-4 text-accent-orange"> Full transparency and fast scaling</p>
                                <p className="text-[1.25rem] font-regular">Platform connects all the processes in all <br/>stores together, allowing to manage everything <br/>from one center with total reliance on data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientPath
