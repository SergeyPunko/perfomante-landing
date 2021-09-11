import Glide from "@glidejs/glide";

const Videos = (function () {
    let glides = []

    const sliders = [
        document.getElementById('ugcslider'),
        document.getElementById('3dslider'),
        document.getElementById('2dslider')
    ].filter(Boolean)

    const btnControlPlay = document.querySelectorAll(".desc-button[data-role=play]");
    const btnControlPause = document.querySelectorAll(".desc-button[data-role=pause]");

    const videoControl = () => {
        btnControlPlay.forEach(control => {
            const video = control.parentElement.parentElement.querySelector('video');

            control.addEventListener("click", () => {
                video.play();
                video.classList.add("active")
            })
        })

        btnControlPause.forEach(control => {
            const video = control.parentElement.parentElement.querySelector('video');

            control.addEventListener("click", () => {
                video.pause();
                video.classList.remove("active")
            })
        })
    }

    const initSliders = () => {
        sliders.forEach(slide => {
            console.log(slide.querySelector("video").children)
            slide.classList.remove("inline");
            const glide = new Glide(slide, {
                type: "slider",
                perView: 2,
                bound: true,
                breakpoints: {
                    768: {
                        perView: 1,
                        peek: 80,
                    },
                    550: {
                        perView: 1,
                        peek: 60,
                    },
                    490: {
                        perView: 1,
                        peek: 20,
                    },
                }
            })
            glide.mount();
            glides.push(glide);
        })
    }

    const init = function () {
        if (sliders.length) {
            if (document.documentElement.clientWidth < 920) {
                initSliders();
            }

            window.addEventListener('resize', () => {
                if (document.documentElement.clientWidth < 920 && !glides.length) {
                    initSliders()
                } else if (document.documentElement.clientWidth > 920 && glides.length) {
                    glides.forEach(glide => glide.destroy());
                    sliders.forEach(slide => slide.classList.add("inline"));
                    glides = []
                }
            })

            videoControl()
        }
    };

    return {
        init: init
    };

})();

export default Videos;
