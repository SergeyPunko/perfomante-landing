import ModalService from '../services/modal.service';

const VideoPlayerModal = (function () {

    const createModal = (video) => (e) => {
        e.preventDefault();

        const modal = ModalService.init('../modals/video.html');
        modal.modal.style.paddingTop = 0;
        const videoElement = modal.modalBox.querySelector('video');
        videoElement.innerHTML = video.innerHTML;
        videoElement.poster = video.poster;
        modal.modalBox.querySelector('.video-player__description').innerHTML = video.parentElement.querySelector('.content').innerHTML;

        initControlsForModal(modal)
    };

    const onPlayHandler = video => () => {
        video.classList.add('active')
    }

    const onPauseHandler = video => () => {
        video.classList.remove('active');
    }

    const onEndHandler = video => () => {
        video.currentTime = 0
        video.classList.remove('active');
    }

    const playVideo = video => async () => {
        if (video.classList.contains('active')) {
            await video.pause();
        } else {
            const videos = document.querySelectorAll('video');

            await videos.forEach(async v => {
                if (v !== video) {
                    await v.load();
                    v.classList.remove("active")
                }
            });

            await video.play();
        }
    }

    const initControlsForModal = (modal) => {
        const closeButton = modal.modalBox.querySelector('.close');
        const video = modal.modalBox.querySelector('video');

        const close = () => {
            closeButton.removeEventListener('click', close);

            deleteVideoHandler(video);

            modal.close();
        }

        videoHandler(video);

        closeButton.addEventListener('click', close);
    }

    const videoHandler = video => {
        video.addEventListener('play', onPlayHandler(video));
        video.addEventListener('pause', onPauseHandler(video));
        video.addEventListener('ended', onEndHandler(video));

        video.parentElement.addEventListener('click', playVideo(video));
    }

    const deleteVideoHandler = video => {
        video.parentElement.removeEventListener('click', playVideo(video));

        video.removeEventListener('play', onPlayHandler(video));
        video.removeEventListener('pause', onPauseHandler(video));
        video.removeEventListener('ended', onEndHandler(video));
    }

    const initButtonEventListeners = function () {
        const playButtonList = document.querySelectorAll('.video__wrap');
        const videoList = document.querySelectorAll('.video__player');

        if (playButtonList.length && videoList.length) {
            Array.prototype.slice.call(playButtonList).forEach((item, i) => {
                const video = videoList[i];
                if(document.documentElement.clientWidth < 1024 && item.classList.contains("modal")){
                    item.addEventListener('click', createModal(video));

                    return
                }

                videoHandler(video);
            });
        }
    };

    const init = function () {
        initButtonEventListeners();
    };

    const destroy = () => {
        const playButtonList = document.querySelectorAll('.video__wrap');
        const videoList = document.querySelectorAll('.video__player');

        if (playButtonList.length && videoList.length) {
            Array.prototype.slice.call(playButtonList).forEach((item, i) => {
                const video = videoList[i];

                if(document.documentElement.clientWidth < 1024){
                    item.removeEventListener('click', createModal(video));

                    return
                }

                deleteVideoHandler(video);
            });
        }
    }

    return {
        init: init,
        destroy: destroy
    };
})();

export default VideoPlayerModal;
