import type {FC} from 'react';
import {Pagination} from "swiper";
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';


import slide1 from "@assets/images/slide-1-crop.png"
import slide1Tablet from "@assets/images/slide-1-crop2.png"
import slide2Tablet from "@assets/images/slide-2-tablet.png"
import slide3Tablet from "@assets/images/slide-3-tablet.png"
import slide2 from "@assets/images/slide-2-crop.png"
import slide3 from "@assets/images/slide-3-crop.png"

import slideFirst from "@assets/images/slide-1.png"
import slideSecond from "@assets/images/slide-2.png"
import slideThird from "@assets/images/slide-3.png"

import ellipseViolet from "@assets/images/ellipse-violet.svg"
import ellipseOrange from "@assets/images/ellipse-orange.svg"


const Slider: FC = () => {
    const isMobile = document.body;
    console.log(isMobile)
    return (
        <>
            <Swiper
                className="h-[95vh] tablet:h-[32.5rem] desktop:h-[40rem] mb-20 overflow-hidden w-full swiper-backface-hidden  hidden desktop:block"
                spaceBetween={10}
                slidesPerView={3}
            >
                <SwiperSlide className="rounded-2xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 h-[95vh] tablet:h-[32.5rem] desktop:h-[40rem] relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slideFirst.src} alt="" className="absolute object-cover w-full h-full"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-2xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 h-[95vh] tablet:h-[32.5rem] desktop:h-[40rem] relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -right-[25.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange" />
                    </div>

                    <img src={slideSecond.src} alt="" className="absolute object-cover w-full h-full"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">17</p>
                        <p className="text-stories-subtitle">countries</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-2xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 h-[95vh] tablet:h-[32.5rem] desktop:h-[40rem] relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[18.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slideThird.src} alt="" className="absolute object-cover w-full h-full"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">$831 <span>mln</span></p>
                        <p className="text-stories-subtitle">2022 sales</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Swiper
                className="tablet:h-[26.125rem] mb-20 overflow-hidden w-full swiper-backface-hidden  hidden tablet:block"
                spaceBetween={10}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="rounded-2xl overflow-hidden tablet:w-full relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slide1Tablet.src} alt="" className="absolute object-cover w-full h-full"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-2xl overflow-hidden tablet:w-full relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -right-[25.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange" />
                    </div>

                    <img src={slide2Tablet.src} alt="" className="absolute object-cover w-full h-full"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">17</p>
                        <p className="text-stories-subtitle">countries</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-2xl overflow-hidden tablet:w-full relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[18.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slide3Tablet.src} alt="" className="absolute object-cover w-full h-full"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">$831 <span>mln</span></p>
                        <p className="text-stories-subtitle">2022 sales</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Swiper
                className="h-[50rem] tablet:h-[32.5rem] desktop:h-[40rem] mb-20 overflow-hidden w-full swiper-backface-hidden block desktop:hidden tablet:hidden"
                spaceBetween={10}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="rounded-2xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 h-[50rem] tablet:h-[32.5rem] desktop:h-[40rem] relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slideFirst.src} alt="" className="absolute object-cover w-full h-full"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=" container rounded-2xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 h-[50rem] tablet:h-[32.5rem] desktop:h-[40rem] relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -right-[25.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange" />
                    </div>

                    <img src={slideSecond.src} alt="" className="absolute object-cover w-full h-full"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">17</p>
                        <p className="text-stories-subtitle">countries</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-2xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 h-[50rem] tablet:h-[32.5rem] desktop:h-[40rem] relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[18.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slideThird.src} alt="" className="absolute object-cover w-full h-full"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">$831 <span>mln</span></p>
                        <p className="text-stories-subtitle">2022 sales</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>

    );
};

export default Slider;
