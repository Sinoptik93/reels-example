import scrollHorizontally from "./fullpage.scrollHorizontally.min"
import FullPage from 'fullpage.js/dist/fullpage.extensions.min';

window.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth < 500) {
        let slideIndex = 0;

        const fullpageInstance = new FullPage('#fullpage', {
            licenseKey: "59L98-1CBMK-YHEG7-AO0LK-NTLVM",
            scrollHorizontallyKey: '6A7AE941-5C404F92-B32196A3-B8F57BF4',
            scrollHorizontally: true,

            controlArrows: false,
            navigation: false,
            lazyLoading: false,
            autoScrolling: false,
            scrollBar: false,
            fitToSection: false,
            credits: {
                enabled: false
            },
            scrollingSpeed: 1000,
            onSlideLeave: (section, origin, destination) => {
                // console.log(origin)
                // console.log(destination)
                if (destination.anchor === "last-slide") {
                    setTimeout(() => {
                        fullpageInstance.setAutoScrolling(false)
                    }, 500)
                }
            },

            onLeave: (origin, destination) => {
                console.log(origin)
                console.log(destination)

                if (destination.anchor === "slider"  && origin.index < destination.index ) {
                    fullpageInstance.moveTo(4, 0);
                    fullpageInstance.setAutoScrolling(true)
                }
            }
        });
    }
})

