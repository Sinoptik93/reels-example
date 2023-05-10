import scrollHorizontally from "./fullpage.scrollHorizontally.min"
import FullPage from 'fullpage.js/dist/fullpage.extensions.min';

window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 500)  return;

    const fullpageInstance = new FullPage('#fullpage', {
        licenseKey: "gplv3-license",
        scrollHorizontallyKey: '6A7AE941-5C404F92-B32196A3-B8F57BF4',
        scrollHorizontally: true,

        controlArrows: false,
        navigation: false,
        lazyLoading: false,
        autoScrolling: true,
        scrollBar: false,
        fitToSection: false,
        credits: {
            enabled: false
        },
        scrollingSpeed: 800,
        touchSensitivity: 5,

        // onSlideLeave: (section, origin, destination, direction) => {
        //     if (destination.anchor === "first-slide") {
        //         fullpageInstance.setFitToSection(false)
        //
        //         setTimeout(() => {
        //             fullpageInstance.setAutoScrolling(false)
        //         }, 1000)
        //     }
        //
        //     if (destination.anchor === "last-slide") {
        //         fullpageInstance.setFitToSection(false)
        //
        //         setTimeout(() => {
        //             fullpageInstance.setAutoScrolling(false)
        //         }, 1000)
        //     }
        // },
        //
        // onLeave: (origin, destination) => {
        //     if (destination.anchor === "slider"  && origin.index > destination.index ) {
        //         fullpageInstance.setFitToSection(true)
        //
        //         setTimeout(() => {
        //             // fullpageInstance.moveTo(4, 2);
        //             fullpageInstance.setAutoScrolling(true)
        //         }, 2500)
        //     }
        //
        //     if (destination.anchor === "slider"  && origin.index < destination.index ) {
        //         fullpageInstance.setFitToSection(true)
        //
        //         setTimeout(() => {
        //             // fullpageInstance.moveTo(4, 0);
        //             fullpageInstance.setAutoScrolling(true)
        //         }, 2500)
        //     }
        // }
    });
})
