import scrollHorizontally from "./fullpage.scrollHorizontally.min"
import FullPage from 'fullpage.js/dist/fullpage.extensions.min';

window.addEventListener("DOMContentLoaded", () => {

    if (window.innerWidth < 500) {
        const fullpageInstance = new FullPage('#fullpage', {
            licenseKey: "59L98-1CBMK-YHEG7-AO0LK-NTLVM",
            scrollHorizontallyKey: '6A7AE941-5C404F92-B32196A3-B8F57BF4',
            scrollHorizontally: true,

            controlArrows: false,
            navigation: false,
            autoScrolling: true,
            scrollBar: false,
            fitToSection: false,
            credits: {
                enabled: false
            },
        });
    }
})

