import Glide from "@glidejs/glide";

const Videos = (function () {
    let glides = []

    const sliders = [
        document.getElementById('ugcslider'),
        document.getElementById('3dslider'),
        document.getElementById('2dslider')
    ].filter(Boolean)

    const videos = document.querySelectorAll("video");
    const vimeoVideos = document.querySelectorAll('.vimeo__video');
    const vimeoPlayers = [];

    const videoControl = () => {
        vimeoVideos.forEach(videoCont => {
            const playButton = videoCont.querySelector('.video__play');
            const playerElem = videoCont.querySelector('.video__player');
            const videoUrl = playerElem.dataset.videoUrl
            const player = new Vimeo.Player(playerElem, {
                responsive: true,
                keyboard: false,
                byline: false,
                controls: false,
                autopause: false,
                title: false,
                url: videoUrl
            });

            playButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                pauseAllVimeoPlayers();
                player.play();
                videoCont.classList.add('started');
                videoCont.classList.add('playing');
            });

            player.on('pause', function() {
                videoCont.classList.remove('playing');
            });

            vimeoPlayers.push(player);
        });

        // videos.forEach(video => {
        //     video.parentElement.addEventListener("click", async () => {
        //         if (video.classList.contains("active")) {
        //             await video.pause();
        //         } else {
        //             await videos.forEach(async v => {
        //                 if (v !== video) {
        //                     await v.load();
        //                     v.classList.remove("active")
        //                 }
        //             })
        //
        //             await video.play();
        //             video.classList.add("active")
        //         }
        //     });
        //
        //     video.addEventListener('pause', () => {
        //         video.classList.remove('active');
        //     });
        //     video.addEventListener('ended', () => {
        //         video.load()
        //         video.classList.remove('active');
        //     });
        // })
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

            glide.on('move', pauseAllVimeoPlayers);
            glide.on('swipe', pauseAllVimeoPlayers);

            glide.mount();
            glides.push(glide);
        })
    }

    const init = function () {
        if (sliders.length) {
            if (document.documentElement.clientWidth < 1024) {
                initSliders();
            }

            window.addEventListener('resize', () => {
                if (document.documentElement.clientWidth < 1024 && !glides.length) {
                    initSliders()
                } else if (document.documentElement.clientWidth > 1024 && glides.length) {
                    glides.forEach(glide => glide.destroy());
                    sliders.forEach(slide => slide.classList.add("inline"));
                    glides = []
                }
            })

            videoControl()
        }
    };

    const pauseAllVimeoPlayers = function () {
        vimeoPlayers.forEach(player => {
            player.pause();
        });
    }

    return {
        init: init
    };

})();

export default Videos;
