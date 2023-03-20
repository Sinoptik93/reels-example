import {useState} from 'react'
import 'swiper/swiper-bundle.min.css';
import './App.scss'
import videomp4 from "./assets/short-1.mp4"
import videowebm from "./assets/short-1.webm"
import videomp42 from "./assets/short-2.mp4"
import videowebm2 from "./assets/short-2.webm"
import videomp43 from "./assets/short-3.mp4"
import videowebm3 from "./assets/short-3.webm"
import overlay from "./assets/overlay.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



function App() {
    const [count, setCount] = useState(0)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <div>Main</div>
    )
}

export default App
