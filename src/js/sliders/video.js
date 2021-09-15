import Glide from "@glidejs/glide";

const Videos = (function () {
    let glides = []

    const sliders = [
        document.getElementById('ugcslider'),
        document.getElementById('3dslider'),
        document.getElementById('2dslider')
    ].filter(Boolean)

    const videos = document.querySelectorAll("video");

    const videoControl = () => {
        videos.forEach(video => {
            video.parentElement.addEventListener("click", async () => {
                if (video.classList.contains("active")) {
                    await video.pause();
                    video.classList.remove("active")
                } else {
                    await videos.forEach(async v => {
                        if (v !== video) {
                            await v.load();
                            v.classList.remove("active")
                        }
                    })

                    await video.play();
                    video.classList.add("active")
                }
            })
        })
    }

    const initSliders = () => {
        sliders.forEach(slide => {
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
