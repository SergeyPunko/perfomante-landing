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
        const playButton = modal.modalBox.querySelector('.controller[data-role=play]');
        const pauseButton = modal.modalBox.querySelector('.controller[data-role=pause]');
        const closeButton = modal.modalBox.querySelector('.close');
        const video = modal.modalBox.querySelector('video');

        const playVideo = () => {
            video.play();
        }

        const pauseVideo = () => {
            video.pause();
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
            playButton.removeEventListener('click', playVideo);
            pauseButton.removeEventListener('click', pauseVideo);
    
            closeButton.removeEventListener('click', close);

            video.removeEventListener('play', onPlayHandler);
            video.removeEventListener('pause', onPauseHandler);
            video.removeEventListener('ended', onEndHandler);

            modal.close();
        }

        video.addEventListener('play', onPlayHandler);
        video.addEventListener('pause', onPauseHandler);
        video.addEventListener('ended', onEndHandler);

        playButton.addEventListener('click', playVideo);
        pauseButton.addEventListener('click', pauseVideo);

        closeButton.addEventListener('click', close);
    }

    const initButtonEventListeners = function () {
        if (document.querySelector('.video__player+.description .description__button') && document.querySelectorAll('.video__player')) {
            const playButtonList = document.querySelectorAll('.video__player+.description .description__button');
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
        if (document.querySelector('.video__player+.description .description__button') && document.querySelectorAll('.video__player')) {
            const playButtonList = document.querySelectorAll('.video__player+.description .description__button');
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
