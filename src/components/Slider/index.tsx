import type {FC} from 'react';
import slide1 from "@assets/images/slide-1-crop.png"
import slide1Tablet from "@assets/images/slide-1-crop2.png"
import slide2 from "@assets/images/slide-2-crop.png"
import slide3 from "@assets/images/slide-3-crop.png"

import ellipseViolet from "@assets/images/ellipse-violet.svg"
import ellipseOrange from "@assets/images/ellipse-orange.svg"

const Slider: FC = () => {
    return (
        <>
            <div className="hidden h-[30rem] desktop:h-[40rem] gap-[1.25rem] desktop:flex">
                <div className="rounded-2xl w-full relative overflow-hidden">
                    <div
                        className="absolute z-10 w-[37.5rem] -right-[20rem] -bottom-[8.125rem]">
                        <img src={ellipseViolet.src} alt="violet"/>
                    </div>

                    <div
                        className="absolute z-10 w-[37.5rem] -left-[18.75rem] -top-[15rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <img src={slide1.src} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

                    <div className="absolute bottom-10 left-4 z-20">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </div>

                <div className="rounded-2xl w-full relative">
                    <img src={slide2.src} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

                    <div className="absolute bottom-10 left-4">
                        <p className="text-stories-title">17</p>
                        <p className="text-stories-subtitle">countries</p>
                    </div>
                </div>

                <div className="rounded-2xl w-full relative">
                    <img src={slide3.src} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

                    <div className="absolute bottom-10 left-4">
                        <p className="text-stories-title">$831 <span>mln</span></p>
                        <p className="text-stories-subtitle">2022 sales</p>
                    </div>
                </div>
            </div>

            <div className="hidden h-[26.125rem] gap-[1.25rem] tablet:flex">
                <div className="rounded-2xl w-full relative">
                    <img src={slide1Tablet.src} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

                    <div className="absolute bottom-10 left-4">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </div>
            </div>

            <div className="flex h-[30rem] gap-[1.25rem] tablet:hidden desktop:hidden">
                <div className="rounded-2xl w-full relative">
                    <img src={slide1.src} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

                    <div className="absolute bottom-10 left-4">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Slider;
