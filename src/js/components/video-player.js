const VideoPlayers = (function () {
    let currentScrollPosition = 0;
    let stopHandler = false;

    const videos = document.querySelectorAll('video');

    const videoHandler = function () {
        if(stopHandler) {
            return;
        }
        const activeVideo = document.querySelector('video.active');
        const videoElements = isScrollDown() ? Array.prototype.slice.call(videos).reverse() : Array.prototype.slice.call(videos);

        videoElements.forEach((video) => {
            if (shouldStopTopVideo(video) || shouldStopBottomVideo(video)) {
                stopVideo(video);
            }

            if (isVideoVisible(video) && !activeVideo) {
                playVideo(video);
            }
        });
        currentScrollPosition = window.pageYOffset;
    };


    const playerEvents = () => {
        Array.prototype.slice.call(videos).forEach((video) => {
            video.addEventListener("play", () => {
                video.classList.add("active");
            })

            video.addEventListener("pause", () => {
                video.classList.remove("active");
            })

            video.parentNode.querySelector('.controller[data-role=pause]').addEventListener("click",()=>{
                stopHandler = true;
                stopVideo(video, true);
            });
            video.parentNode.querySelector('.controller[data-role=play]').addEventListener("click",()=>playVideo(video));
        })
    }

    const isVideoVisible = (video) => {
        const videoOffsetBottom = video.getBoundingClientRect().bottom + window.pageYOffset;
        const videoOffsetTop = video.getBoundingClientRect().top + window.pageYOffset;
        const videoHeight = video.getBoundingClientRect().height;

        const overflowTop = isScrollDown() ? videoOffsetBottom : videoOffsetBottom - videoHeight / 2;

        return window.pageYOffset + window.innerHeight >= overflowTop &&
            !video.classList.contains('active') &&
            window.pageYOffset < videoOffsetTop - 88 + videoHeight / 2
    }

    const playVideo = async (video) => {
        if (!video.classList.contains('active')) {
            Array.prototype.slice.call(videos).forEach((video) => {
                video.classList.remove("active");
                video.pause();
            })
            await video.play();
        }
    }

    const stopVideo = (video, isPause) => {
        if (video.classList.contains('active')) {
            video.pause();
            !isPause && (video.currentTime = 0);
        }
    }

    const isScrollDown = () => currentScrollPosition < window.pageYOffset;

    const shouldStopBottomVideo = (video) => {
        const { top, height } = video.getBoundingClientRect();

        return top > 0 && height / 2 > window.innerHeight - top
    }

    const shouldStopTopVideo = (video) => {
        const { top, height } = video.getBoundingClientRect();

        return top < 0 && height / 2 < Math.abs(top) + 88
    }

    const initEventListeners = function () {
        playerEvents();
        window.addEventListener('scroll', videoHandler);
    };

    const init = function () {
        videoHandler();
        initEventListeners();
    };

    return {
        init: init,
    };
})();

export default VideoPlayers;
