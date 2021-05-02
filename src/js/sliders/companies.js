import Glide from "@glidejs/glide";

const Companies = (function () {
    const initCarousel = function () {
        const carouselElem = document.getElementById("autoplay");

        const carousel = new Glide(carouselElem, {
            type: "carousel",
            autoplay: true,
            hoverpause: false,
            perView: 5,
            animationTimingFunc: "linear",
            animationDuration: 1000,
            breakpoints: {
                1024: {
                    perView: 3,
                },
                768: {
                    perView: 2,
                    autoplay: false,
                    type: "slider"
                },
            },
            peek: {
                before: 10,
                after: 10
            }
        }).mount()

        window.onresize = () => { carousel.update() }
    };

    const init = function () {
        if (document.getElementById("autoplay")) {
            initCarousel();
        }
    };

    return {
        init: init
    };

})();

export default Companies;
