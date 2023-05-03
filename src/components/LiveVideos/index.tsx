import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import { Pagination, EffectCards} from 'swiper';
import previewImageWebp from "@assets/images/live-video-preview.webp"


function LiveVideos() {

    return (

        <Swiper
            className="custom-card overflow-hidden w-full mobile:pt-2 mobile:mb-6 h-[16rem] tablet:h-[19rem] desktop:h-[19rem] swiper-backface-hidden mobile:py-9 mobile:px-8 tablet:px-7 tablet:py-12 desktop:px-10 desktop:pb-10 desktop:pt-14 "
            slidesPerView={1}
            centeredSlides
            loop
            pagination={{ clickable: true }}
            modules={[EffectCards, Pagination]}
            effect={"cards"}
            grabCursor={true}
            cardsEffect={{
                slideShadows: true,
                rotate: false,
                perSlideOffset: 10
            }}
        >
            <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <div className="absolute z-10 rounded-bl-[20px] min-w-[10rem] bg-accent-orange right-0 pl-3 py-3 flex items-center gap-3">
                    <p className="text-[0.8rem] font-regular text-white uppercase">South America</p>
                    <div className="bg-white rounded-full w-3 h-3"></div>
                </div>

                <img src={previewImageWebp.src} alt="alt" className="relative min-h-full min-w-full object-cover"/>
            </SwiperSlide>

            <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <div className="absolute z-10 rounded-bl-[20px] min-w-[10rem] bg-accent-orange right-0 pl-3 py-3 flex items-center gap-3">
                    <p className="text-[0.8rem] font-regular text-white uppercase">Kazakhstan</p>
                    <div className="bg-white rounded-full w-3 h-3"></div>
                </div>

                <img src={previewImageWebp.src} alt="alt" className="relative min-h-full min-w-full object-cover"/>
            </SwiperSlide>

            <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <div className="absolute z-10 rounded-bl-[20px] min-w-[10rem] bg-accent-orange right-0 pl-3 py-3 flex items-center gap-3">
                    <p className="text-[0.8rem] font-regular text-white uppercase">Russia</p>
                    <div className="bg-white rounded-full w-3 h-3"></div>
                </div>

                <img src={previewImageWebp.src} alt="alt" className="relative min-h-full min-w-full object-cover"/>
            </SwiperSlide>

            <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <div className="absolute z-10 rounded-bl-[20px] absolute min-w-[10rem] bg-accent-orange right-0 pl-3 py-3 flex items-center gap-3">
                    <p className="text-[0.8rem] font-regular text-white uppercase">Finland</p>
                    <div className="bg-white rounded-full w-3 h-3"></div>
                </div>

                <img src={previewImageWebp.src} alt="alt" className="relative min-h-full min-w-full object-cover"/>
            </SwiperSlide>

            <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <div className="absolute z-10 rounded-bl-[20px] min-w-[10rem] bg-accent-orange right-0 pl-3 py-3 flex items-center gap-3">
                    <p className="text-[0.8rem] font-regular text-white uppercase">Korea</p>
                    <div className="bg-white rounded-full w-3 h-3"></div>
                </div>

                <img src={previewImageWebp.src} alt="alt" className="relative min-h-full min-w-full object-cover"/>
            </SwiperSlide>
        </Swiper>
    )
}

export default LiveVideos
