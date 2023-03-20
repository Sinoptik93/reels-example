import { useState } from 'react'
import { Link } from "react-router-dom";
import 'swiper/swiper-bundle.min.css';
import './App.scss'



function App() {
    const [count, setCount] = useState(0)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <>
            <h1>Main</h1>
            <Link to="/reels">Reels</Link>
        </>
    )
}

export default App
