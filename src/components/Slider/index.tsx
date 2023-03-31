import type {FC} from 'react';
import slide1 from "@assets/images/slide-1-crop.png"
import slide1Tablet from "@assets/images/slide-1-crop2.png"
import slide2 from "@assets/images/slide-2-crop.png"
import slide3 from "@assets/images/slide-3-crop.png"


const Slider: FC = () => {
    return (
        <>
            <div className="hidden h-[480px] desktop:h-[640px] gap-[20px] desktop:flex">
                <div className="rounded-2xl w-full relative">
                    <img src={slide1} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

                    <div className="absolute bottom-10 left-4">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </div>

                <div className="rounded-2xl w-full relative">
                    <img src={slide2} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

                    <div className="absolute bottom-10 left-4">
                        <p className="text-stories-title">17</p>
                        <p className="text-stories-subtitle">countries</p>
                    </div>
                </div>

                <div className="rounded-2xl w-full relative">
                    <img src={slide3} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

                    <div className="absolute bottom-10 left-4">
                        <p className="text-stories-title">$831 <span>mln</span></p>
                        <p className="text-stories-subtitle">2022 sales</p>
                    </div>
                </div>
            </div>

            <div className="hidden h-[418px] gap-[20px] tablet:flex">
                <div className="rounded-2xl w-full relative">
                    <img src={slide1Tablet} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

                    <div className="absolute bottom-10 left-4">
                        <p className="text-stories-title">900+</p>
                        <p className="text-stories-subtitle">stores</p>
                    </div>
                </div>
            </div>

            <div className="flex h-[480px] gap-[20px] tablet:hidden desktop:hidden">
                <div className="rounded-2xl w-full relative">
                    <img src={slide1} alt="" className="absolute object-cover w-full h-full rounded-2xl"/>

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
