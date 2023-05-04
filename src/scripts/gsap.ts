import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin"
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// gsap.to(".box", {
//     scrollTrigger: ".box",
//     y: -100,
//     duration: 2,
// });
//
//
//
// gsap.to("#loading-text", {
//     duration: 1,
//     delay: 1,
//     text: {
//         value: 'Loading...',
//         newClass: "animate-pulse text-accent-orange text-5xl font-bold",
//         delimiter: "",
//         rtl: true,
//     },
//     ease: "none",
// }).then(() => {
//     gsap.fromTo("#loading-screen", {
//             opacity: 1,
//             duration: 2,
//         },
//         {
//             opacity: 0,
//             delay: 3,
//             display: "none"
//         })
// });





