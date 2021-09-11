import Glide from "@glidejs/glide";
import SEO_CODES from "../seo-codes/seo-code";
import { sendGoalToAllTrackers } from '../analytics/send-events';

const Customers = (function () {
    const slider = document.getElementById("slider");
    const slides = slider && slider.querySelectorAll(".glide__slide");
    const slideInfoElement = document.getElementById("slide-info");

    const initCarousel = function () { 
        const glide = new Glide(slider, {
            startAt: 0,
            animationDuration: 350,
            perTouch: 1,
            rewind: false
        }).mount()
    
        glide.on("run.after", setActiveSlide);
    };

    const setActiveSlide = e => {
        e && sendGoalToAllTrackers(SEO_CODES.swipe);
        Array.prototype.slice.call(slides).forEach((element, index) => {
            if (element.classList.contains("glide__slide--active")) {
                slideInfoElement.textContent = `${index + 1}/${slides.length}`
            }
        })
    }

    const init = function () {
        if (slider && slides && slideInfoElement) {
            initCarousel();
            setActiveSlide();
        }
    };

    return {
        init: init
    };

})();

export default Customers;
