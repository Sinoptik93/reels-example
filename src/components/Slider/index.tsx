import type {FC} from 'react';
import {Pagination, Autoplay} from "swiper";
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';

// import slide1Tablet from "@assets/images/slide-1-crop2.png"
import slide1TabletWebp from "@assets/images/slide-1-crop2.webp"
// import slide2Tablet from "@assets/images/slide-2-tablet.png"
import slide2TabletWebp from "@assets/images/slide-2-tablet.webp"
// import slide3Tablet from "@assets/images/slide-3-tablet.png"
import slide3TabletWebp from "@assets/images/slide-3-tablet.webp"

// import slideFirst from "@assets/images/slide-1.png"
import slideFirstWebp from "@assets/images/slide-1.webp"
// import slideSecond from "@assets/images/slide-2.png"
import slideSecondWebp from "@assets/images/slide-2.webp"
// import slideThird from "@assets/images/slide-3.png"
import slideThirdWebp from "@assets/images/slide-3.webp"

import ellipseViolet from "@assets/images/ellipse-violet.svg"
import ellipseOrange from "@assets/images/ellipse-orange.svg"


const Slider: FC = () => {

    return (
        <>
            <Swiper
                className="container desktop:h-[45rem] mb-20 overflow-hidden w-full swiper-backface-hidden hidden desktop:block"
                spaceBetween={10}
                slidesPerView={3}
            >
                <SwiperSlide className="rounded-3xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slideFirstWebp.src} alt="" className="absolute object-cover w-full h-full"  loading="lazy"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-3xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -right-[25.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange" />
                    </div>

                    <img src={slideSecondWebp.src} alt="" className="absolute object-cover w-full h-full"  loading="lazy"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">17</p>
                        <p className="text-stories-subtitle">countries</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-3xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[18.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slideThirdWebp.src} alt="" className="absolute object-cover w-full h-full"  loading="lazy"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">$831 <span>mln</span></p>
                        <p className="text-stories-subtitle">2022 sales</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Swiper
                className="tablet:h-[26.125rem] mb-20 overflow-hidden w-full swiper-backface-hidden pb-10 hidden tablet:block"
                spaceBetween={10}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="rounded-3xl overflow-hidden tablet:w-full relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slide1TabletWebp.src} alt="" className="absolute object-cover w-full h-full"  loading="lazy"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-3xl overflow-hidden tablet:w-full relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -right-[25.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange" />
                    </div>

                    <img src={slide2TabletWebp.src} alt="" className="absolute object-cover w-full h-full"  loading="lazy"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">17</p>
                        <p className="text-stories-subtitle">countries</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-3xl overflow-hidden tablet:w-full relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[18.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slide3TabletWebp.src} alt="" className="absolute object-cover w-full h-full"  loading="lazy"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">$831 <span>mln</span></p>
                        <p className="text-stories-subtitle">2022 sales</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Swiper
                className="h-[76vh] tablet:h-[32.5rem] desktop:h-[40rem] pb-10 overflow-hidden w-full swiper-backface-hidden block desktop:hidden tablet:hidden"
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="rounded-3xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 tablet:h-[32.5rem] desktop:h-[40rem] relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[25rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slideFirstWebp.src} alt="" className="absolute object-cover w-full h-full"  loading="lazy"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-3xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 tablet:h-[32.5rem] desktop:h-[40rem] relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -right-[25.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange" />
                    </div>

                    <img src={slideSecondWebp.src} alt="" className="absolute object-cover w-full h-full"  loading="lazy"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">17</p>
                        <p className="text-stories-subtitle">countries</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="rounded-3xl overflow-hidden w-[90vw] tablet:w-full desktop:w-1/3 tablet:h-[32.5rem] desktop:h-[40rem] relative">
                    <div
                        className="absolute z-10 w-[40rem] -left-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[40rem] -left-[18.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slideThirdWebp.src} alt="" className="absolute object-cover w-full h-full" loading="lazy"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title mobile:text-[6rem] mb-4">$831 <span>mln</span></p>
                        <p className="text-stories-subtitle">2022 sales</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
