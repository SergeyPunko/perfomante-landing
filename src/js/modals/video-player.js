import ModalService from '../services/modal.service';

const VideoPlayerModal = (function () {

    const createModal = (video) => (e) => {
        e.preventDefault();

        const modal = ModalService.init('../modals/video.html');
        modal.modalBox.querySelector('video').innerHTML = video.innerHTML;
        modal.modalBox.querySelector('.video-player__description').innerHTML = video.parentElement.querySelector('.content').innerHTML;

        initControlsForModal(modal)
    };

    const initControlsForModal = (modal) => {
        const playButton = modal.modalBox.querySelector('.controller[data-role=play]');
        const pauseButton = modal.modalBox.querySelector('.controller[data-role=pause]');
        const closeButton = modal.modalBox.querySelector('.close');

        const playVideo = () => {
            const video = modal.modalBox.querySelector('video');
            video.play();
            video.classList.add('active')
        }

        const pauseVideo = () => {
            const video = modal.modalBox.querySelector('video');
            video.pause();
            video.classList.remove('active');
        }

        const close = () => {
            playButton.removeEventListener('click', playVideo);
            pauseButton.removeEventListener('click', pauseVideo);
    
            closeButton.removeEventListener('click', close);

            modal.close();
        }

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
