import Glide from "@glidejs/glide";

const Resources = (function () {
    const slider = document.getElementById("resources_slider");

    const initSlider = function () { 
        new Glide(slider, {
            type: "slider",
            startAt: 0,
            perView: 3,
            bound: true,
            breakpoints: {
                1024: {
                    perView: 2,
                    startAt: 1,
                },
                768: {
                    perView: 1,
                    peek: 120,
                },
                550: {
                    perView: 1,
                    peek: 80,
                },
                480: {
                    perView: 1,
                    peek: 40,
                },
                370: {
                    perView: 1,
                    peek: 20,
                }
            },
            rewind: false
    
        }).mount()
    };

    const init = function () {
        if (slider) {
            initSlider();
        }
    };

    return {
        init: init
    };

})();

export default Resources;
