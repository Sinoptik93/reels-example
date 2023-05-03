import {useState, useEffect} from "react";
import type {SwiperRef} from "swiper/react";

export type Direction = 'up' | 'down' | 'left' | 'right'

const useTouch = <TElement extends HTMLElement | SwiperRef>(
    ref: React.MutableRefObject<TElement | null>,
    onTouch: (direction: Direction) => void,
) => {
    const [startPoint, setStartPoint] = useState<Touch | null>(null)
    // const [currentPoint, setCurrentPoint] = useState<Touch | null>(null)
    const [endPoint, setEndPoint] = useState<Touch | null>(null)

    const [direction, setDirection] = useState<Direction | null>(null)

    useEffect(() => {
        const handleTouchStart = function (e: TouchEvent) {
            // @ts-ignore
            setStartPoint(e?.touches[0])
            setEndPoint(null)
        }
        const handleTouchMove = function (e: TouchEvent) {
            setEndPoint(e?.changedTouches[0])
        }

        const target = ref?.current
        if (!target) return
        target.addEventListener('touchstart', handleTouchStart)
        target.addEventListener('touchend', handleTouchMove)

        return () => {
            target.removeEventListener('touchstart', handleTouchStart)
            target.removeEventListener('touchend', handleTouchMove)

        }
    }, [ref])

    useEffect(() => {
        if (startPoint && endPoint) {
            const diffX = startPoint.clientX - endPoint.clientX
            const diffY = startPoint.clientY - endPoint.clientY

            let dir: Direction
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX > 0) {
                    dir = 'left'
                } else {
                    dir = 'right'
                }
            } else {
                if (diffY > 0) {
                    dir = 'up'
                } else {
                    dir = 'down'
                }
            }

            setDirection(dir)
        } else {
            setDirection(null)
        }
    }, [startPoint, endPoint])

    useEffect(() => {
        if (direction) {
            onTouch(direction)
        }
    }, [direction, onTouch])
}

export { useTouch }
