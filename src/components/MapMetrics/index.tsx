import LiveDate from "@components/LiveDate";
import star from "@assets/icons/star.svg";
import ellipseOrange from "@assets/images/ellipse-orange.svg";
import mapDots from "@assets/images/map-dots.png";
import LiveVideos from "@components/LiveVideos";
import Map from "@components/Map";
import {useLayoutEffect} from "react";

interface MapMetricsProps {
}

const MapMetrics = ({}: MapMetricsProps) => {
    console.log('e')

    useLayoutEffect(() => {
        const plugTotalSales = document.querySelector("#plug-total-sales");
        const plugSales = document.querySelector("#plug-sales-today");
        const plugOrders = document.querySelector("#plug-orders");
        const getRandomValue = (stepCount: number) => Math.floor(Math.random() * stepCount);
        const parseFormattedNumber = (rawNumber: string) => parseInt(rawNumber.replaceAll(/[&nbsp; ]/g, ''))
        const currency = Intl.NumberFormat("ru-RU" )

        const timer = setInterval(() => {
            const currentTotalSales = parseFormattedNumber(plugTotalSales.innerHTML)
            const currentSales = parseFormattedNumber(plugSales.innerHTML);
            const currentOrders = parseFormattedNumber(plugOrders.innerHTML);

            const updatedValue = getRandomValue(2000);

            plugTotalSales.innerHTML = String(currency.format(currentTotalSales + updatedValue));
            plugSales.innerHTML = String(currency.format(currentSales + updatedValue));
            plugOrders.innerHTML = String(currency.format(currentOrders + getRandomValue(10)));
        }, 2000);
    }, [])

    return (
        <>
            <div className="box tablet:container desktop:container mb-10">
                <div className="relative rounded-3xl w-full mobile:h-[84vh] overflow-hidden bg-gray">
                    <img
                        alt="World map"
                        src={mapDots.src}
                        className="hidden absolute object-cover w-full h-full mobile:object-[-34.4rem_4rem] tablet:scale-[1.6] desktop:scale-[1.6] tablet:-left-[27rem] tablet:top-[17rem] desktop:-left-[38rem] desktop:top-[17rem]"
                    />

                    <Map />

                    <div className="absolute hidden w-[56.25rem] -bottom-[26rem] -right-[36.75rem]">
                        <img src={ellipseOrange.src} alt="orange"/>
                    </div>

                    <div
                        className="relative p-[2rem] tablet:p-8 desktop:p-8 mobile:h-full w-full flex flex-col justify-between desktop:flex-row desktop:gap-[8.75rem] mobile:justify-between pointer-events-none">
                        <div className="flex flex-col gap-2 tablet:gap-6 desktop:gap-6 desktop:grow">
                            <div
                                className="flex items-center mobile:justify-between tablet:gap-[4.65rem] desktop:gap-[4.65rem]">
                                <div className="flex items-center gap-1 tablet:gap-2 desktop:gap-2">
                                    <div
                                        className="bg-[#F24100] w-[0.5rem] h-[0.5rem] tablet:w-[0.875rem] tablet:h-[0.875rem] desktop:w-[0.875rem] desktop:h-[0.875rem] rounded-full animate-pulse"></div>
                                    <p className="uppercase text-[1rem] tablet:text-[1.5rem] desktop:text-[1.5rem] leading-none">
                                        Live
                                    </p>
                                </div>

                                <LiveDate/>
                            </div>

                            <div>
                                <p className="text-4xl desktop:text-[5.125rem]">
                                    $ <span id="plug-total-sales">39 343 143</span>
                                </p>
                                <p className="tablet:block desktop:block text-[1.5rem]">
                                    sales this year
                                </p>
                            </div>
                        </div>

                        <div className="mobile:h-fit tablet:basis-[26rem] desktop:basis-[26rem] pointer-events-auto">
                            <div
                                className="translate-z-0  mobile:gap-4 desktop:rounded-4xl desktop:px-6 desktop:pt-4 desktop:pb-8 flex flex-col desktop:gap-7">
                                <p className="hidden text-[0.75rem] tablet:text-[1.5rem] desktop:text-[1.5rem] text-dark-gray">
                                    Updated minute ago
                                </p>

                                <div className="">
                                    <p className="text-[2.2rem] tablet:text-[3.375rem] desktop:text-[3.375rem] leading-custom">
                                        $ <span id="plug-sales-today">2 091 798</span>
                                    </p>
                                    <p className="text-[1.25rem] leading-none">sales today</p>
                                </div>

                                <div className="flex">
                                    <div className="flex gap-4 tablet:gap-6 desktop:gap-6 justify-between grow">
                                        <div className="w-1/2">
                                            <p
                                                className="text-[2.2rem] tablet:text-[3.375rem] desktop:text-[3.375rem] leading-custom"
                                                id="plug-orders"
                                            >
                                                56678
                                            </p>
                                            <p className="text-[1.25rem] leading-none">orders</p>
                                        </div>

                                        <div className="w-1/2">
                                            <div className="flex items-center">
                                                <p className="text-[2.2rem] tablet:text-[3.375rem] desktop:text-[3.375rem] leading-custom pr-2">
                                                    4,8
                                                </p>

                                                <div className="w-[1.8rem] tablet:w-[2.75rem] desktop:w-[2.75rem]">
                                                    <img
                                                        src={star.src}
                                                        alt="star icon"
                                                        className="object-contain w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-[1.25rem] leading-none">client rating</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex grow">
                                    <div className="flex gap-4 tablet:gap-6 desktop:gap-6justify-between grow">
                                        <div className="w-1/2">
                                            <p className="text-[2.2rem] tablet:text-[3.375rem] desktop:text-[3.375rem] leading-custom">
                                                30:12
                                            </p>
                                            <p className="text-[1.25rem] leading-none">kitchen speed</p>
                                        </div>

                                        <div className="w-1/2">
                                            <p className="text-[2.2rem] tablet:text-[3.375rem] desktop:text-[3.375rem] leading-custom">
                                                30:11
                                            </p>
                                            <p className="text-[1.25rem] leading-none">avg delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mobile:hidden translate-z-0 rounded-4xl justify-center">
                                <div className="mt-10 hidden">
                                    <p className="text-subtitle">Real-time pizzeria</p>
                                </div>

                                <div className="max-w-[25rem]">
                                    <LiveVideos/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="container block tablet:hidden desktop:hidden">
                    <div className="mb-4">
                        <p className="text-subtitle">Real-time pizzeria</p>
                    </div>
                </div>

                <div className="tablet:hidden desktop:hidden">
                    <LiveVideos />
                </div>
            </div>

        </>
    );
};

export default MapMetrics;
