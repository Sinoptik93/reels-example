import {useState, useEffect, RefObject} from "react";
import type { SwiperRef } from "swiper/react";

type RefObj =  RefObject<HTMLDivElement> | RefObject<SwiperRef>;

const useOnScreen = (ref: RefObj, rootMargin = "0px") => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                // @ts-ignore
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            // @ts-ignore
            observer.observe(ref.current);
        }

        return () => {
            // @ts-ignore
            observer.unobserve(ref.current);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}

export { useOnScreen }
