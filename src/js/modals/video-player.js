import ModalService from '../services/modal.service';

const VideoPlayerModal = (function () {

    const createModal = (video) => (e) => {
        e.preventDefault();

        const modal = ModalService.init('../modals/video.html');
        const videoElement = modal.modalBox.querySelector('video');
        videoElement.innerHTML = video.innerHTML;
        videoElement.poster = video.poster;
        modal.modalBox.querySelector('.video-player__description').innerHTML = video.parentElement.querySelector('.content').innerHTML;

        initControlsForModal(modal)
    };

    const initControlsForModal = (modal) => {
        const closeButton = modal.modalBox.querySelector('.close');
        const video = modal.modalBox.querySelector('video');

        const playVideo = () => {
            if (video.classList.contains('active')) {
                video.pause();
            } else {
                video.play();
            }
        }

        const onPlayHandler = () => {
            video.classList.add('active')
        }

        const onPauseHandler = () => {
            video.classList.remove('active');
        }

        const onEndHandler = () => {
            video.currentTime = 0
            video.classList.remove('active');
        }

        const close = () => {
            video.parentElement.removeEventListener('click', playVideo);

            closeButton.removeEventListener('click', close);

            video.removeEventListener('play', onPlayHandler);
            video.removeEventListener('pause', onPauseHandler);
            video.removeEventListener('ended', onEndHandler);

            modal.close();
        }

        video.addEventListener('play', onPlayHandler);
        video.addEventListener('pause', onPauseHandler);
        video.addEventListener('ended', onEndHandler);

        video.parentElement.addEventListener('click', playVideo);

        closeButton.addEventListener('click', close);
    }

    const initButtonEventListeners = function () {
        if (document.querySelector('.video__wrap.modal') && document.querySelectorAll('.video__player')) {
            const playButtonList = document.querySelectorAll('.video__wrap');
            const videoList = document.querySelectorAll('.video__player');

            Array.prototype.slice.call(playButtonList).forEach((item, i) => {
                item.addEventListener('click', createModal(videoList[i]));
            });
        }
    };

    const init = function () {
        initButtonEventListeners();
    };

    const destroy = () => {
        if (document.querySelector('.video__wrap') && document.querySelectorAll('.video__player')) {
            const playButtonList = document.querySelectorAll('.video__wrap');
            const videoList = document.querySelectorAll('.video__player');

            Array.prototype.slice.call(playButtonList).forEach((item, i) => {
                item.removeEventListener('click', createModal(videoList[i]));
            });
        }
    }

    return {
        init: init,
        destroy: destroy
    };
})();

export default VideoPlayerModal;
