import Glide from "@glidejs/glide";

window.onload = function () {
    const slider = document.getElementById("slider");
    const slides = slider.querySelectorAll(".glide__slide");
    const slideInfoElement = document.getElementById("slide-info");
    const burger = document.getElementById("burger");

    const glide = new Glide(document.getElementById("slider"), {
        startAt: 0,
        animationDuration: 0,
        rewind: false
    }).mount()

    glide.on("run.after", setActiveSlide)

    function setActiveSlide() {
        slides.forEach((element, index) => {
            if (element.classList.contains("glide__slide--active")) {
                slideInfoElement.textContent = `${index + 1}/${slides.length}`
            }
        })
    }

    setActiveSlide();

    new Glide(document.getElementById("autoplay"), {
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

    burger.addEventListener("click", ({ target }) => {
        if (target.checked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    })
};
