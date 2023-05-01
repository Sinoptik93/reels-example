import {useEffect, useState} from "react";
import type {FC} from 'react';
import dayJs from 'dayjs'
import ellipseViolet from "@assets/images/ellipse-violet.svg";
import ellipseOrange from "@assets/images/ellipse-orange.svg";

interface FooterInfoProps {
    step: number;
    timeout: number;
}

dayJs().format()

const FooterInfo: FC<FooterInfoProps> = ({
                                             step = 5,
                                             timeout = 1000,
                                         }) => {

    const PATTERN = 'DD MMM YYYY, HH:mm:ss'
    const [count, setCount] = useState(0);
    const [time, setTime] = useState<string>(dayJs(new Date).format(PATTERN));

    useEffect(() => {
        const timer = setInterval(() => {
            const getRandomValue = (stepCount: number) => Math.floor(Math.random() * stepCount);

            setCount((prevValue) => prevValue + getRandomValue(step));
            setTime(dayJs(new Date).format(PATTERN));
        }, timeout);

        return () => {
            clearInterval(timer);
        }
    }, []);


    return (
        <div
            className="overflow-hidden relative flex flex-col bg-gray rounded-[28.9375rem]">
            <div
                className="absolute z-10 w-[60rem] tablet:w-[83rem] desktop:w-[83rem] -left-[42rem] -bottom-[13rem] desktop:bottom-auto desktop:-left-[50rem] desktop:-top-[24rem]">
                <img src={ellipseViolet.src} alt="violet"/>
            </div>

            <div
                className="absolute z-10 w-[60rem] desktop:w-[83rem] -right-[44rem] -bottom-[9rem] desktop:right-auto desktop:bottom-auto desktop:-left-[10rem] desktop:top-[5rem]">
                <img src={ellipseOrange.src} alt="orange"/>
            </div>

            <div
                className="w-[20rem] h-[30rem] tablet:w-[30rem] tablet:h-[20.25rem] desktop:w-[50rem] desktop:h-[31.25rem]">
                <p className="z-10 absolute absolute-x-center top-[19rem] w-3/4 tablet:top-[3rem] tablet:w-[60%] desktop:top-[3rem] desktop:w-1/2  font-regular leading-none tracking-tighter pb-4 text-[1.2rem] tablet:text-[1.25rem] desktop:text-[1.875rem]">
                    Number of orders placed while you’ve been scrolling this page
                </p>

                <p className={`z-10 absolute absolute-x-center tablet:absolute-center desktop:absolute-centetext-white font-light leading-custom ${count < 1000 ? "text-[10rem] top-[8rem] tablet:text-[8.625rem] desktop:text-[14.1875rem]" : count > 1000 && count < 10000 ? "text-[6rem] top-[10.3rem] tablet:text-[8.625rem] desktop:text-[10.1875rem]" : "top-[10rem] text-[4rem] tablet:text-[4rem] desktop:text-[6rem]"}`}>
                    {count.toLocaleString('ru-RU')}
                </p>

                <div className="z-10 absolute absolute-x-center top-[7rem] w-3/4 tablet:top-[14rem] tablet:w-3/4 desktop:top-[23rem] desktop:w-1/2 flex items-center gap-2">
                    <div className="w-6 tablet:w-6 desktop:w-6">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="object-contain w-full h-full">
                            <path
                                d="M22.9393 0.172564C18.1703 -0.453206 13.334 0.634855 9.29255 3.2428C5.25105 5.85075 2.26697 9.80912 0.872187 14.4123C-0.522593 19.0156 -0.237428 23.9645 1.67685 28.3771C3.59113 32.7896 7.01013 36.379 11.3244 38.5055C15.6387 40.632 20.568 41.1573 25.2335 39.9879C29.8991 38.8185 33.9978 36.0304 36.7991 32.1204C39.6004 28.2104 40.9223 23.4328 40.529 18.639C40.1358 13.8452 38.053 9.34679 34.652 5.94562C31.4902 2.78372 27.3729 0.75431 22.9393 0.172564V0.172564ZM31.5683 29.9243C31.3214 30.2193 30.9678 30.4047 30.5848 30.4401C30.2018 30.4755 29.8203 30.358 29.5235 30.1132L19.3743 21.4139C19.2108 21.2773 19.0793 21.1065 18.9891 20.9135C18.899 20.7205 18.8522 20.5101 18.8523 20.2971V5.79814C18.8523 5.41361 19.0051 5.04482 19.277 4.77291C19.5489 4.50101 19.9177 4.34825 20.3022 4.34825C20.6867 4.34825 21.0555 4.50101 21.3274 4.77291C21.5993 5.04482 21.7521 5.41361 21.7521 5.79814V19.6152L31.3794 27.8796C31.5262 28.0012 31.6477 28.1506 31.7367 28.3192C31.8257 28.4879 31.8806 28.6724 31.8981 28.8623C31.9157 29.0522 31.8956 29.2437 31.839 29.4258C31.7824 29.6079 31.6904 29.777 31.5683 29.9235V29.9243Z"
                                fill="currentColor"/>
                        </svg>
                    </div>

                    <p className="text-legend uppercase">{time}</p>
                </div>
            </div>
        </div>
    );
};

export default FooterInfo;
