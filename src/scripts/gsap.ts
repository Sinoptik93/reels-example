import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin"

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const containers = document.querySelectorAll('.box');
const blocks = document.querySelectorAll('.box-2');
const loadingScreen = document.querySelector("#loading-screen");

const lockBody = (value: boolean) => {
    document.body.style.overflow = value ? 'hidden' : '';
}


const shuffleArray = (array: string[]) => {
    return array.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

const phrases = [
    "We’re the first pizza chain in the world to cook a Chat GTP generated recipe",
    "900+ stores stream your pizza making live from the kitchen",
    "We’re openly share the amount of sales and number of orders from every store on dodobrands.io",
    "We’re deliver 5 orders every time you blink",
    "720 000 orders per day - our platform capacity. That’s right! Just a regular working day:)",
    "Our app is adapted for visually impaired people in all 17 countries of presence",
    "250+ programmers consistently developing our platform",
    "Back in 2014 DODO were the first pizza chain to use drone in a delivery",
    "In 2016 we were delivering pizza with a real reindeer🦌"
];

const textElement = document.querySelector('.loading-text');

// const tl = gsap.timeline({repeat: -1, repeatDelay: 1});
// shuffleArray(phrases).forEach((phrase) => {
//     tl.to(textElement, {duration: 1, opacity: 0})
//         .call(() => { textElement.textContent = phrase })
//         .to(textElement, {duration: 1, opacity: 1})
//         .to(textElement, {duration: 3});
// });
//
// window.scrollTo({
//     top: 0
// })

window.addEventListener("load", () => {
    // setTimeout(() => {
    //     gsap.to(loadingScreen, {
    //         duration: 1,
    //         opacity: 0,
    //         onComplete: () => {
    //             lockBody(false);
    //             loadingScreen.parentNode.removeChild(loadingScreen);
    //         }
    //     });
    // }, 2000)

    setTimeout(() => {
        gsap.set(".heading-gsap", { opacity: 0, y: -50 });

        gsap.to(".heading-gsap", {
            duration: 2,
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".heading-gsap",
                start: "top top",
                end: "top top",
                // scrub: 1,
                // markers: true
            }
        })

        containers.forEach((container) => {
            gsap.set(container, { opacity: 0, y: -25 });

            gsap.to(container, {
                duration: 0.7,
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: container,
                    start: "70% 90%",
                    end: "70% 90%",
                    // scrub: 1,
                    // markers: true
                }
            })
        })

        blocks.forEach((block) => {
            gsap.set(block, { opacity: 0, y: -25 });

            gsap.to(block, {
                duration: 0.7,
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: block,
                    start: "10% 90%",
                    end: "10% 90%",
                    // markers: true
                }
            })
        })
    }, 1000)
})


