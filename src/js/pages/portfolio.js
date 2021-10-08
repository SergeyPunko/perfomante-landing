import VideoPlayerModal from "../modals/video-player";
import Mailer from "../services/mailer.service";
import { withRecaptcha } from "../utils/recaptcha-wrapper";
import { TYPE, videosInformation } from "./videos";

const Portfolio = (function () {
    const MAX_VIDEO_LENGTH = 9;
    let showAll = false

    const moreButton = document.querySelector('button.more-link');
    const videoContainer = document.querySelector('.videos-section .video');
    const videoTypeButton = document.querySelectorAll('.category__navigation-item > a');
    const formOffer = document.querySelector('.touch-with-us .form-offer')

    const getCurrentType = () => Object.values(TYPE).includes(window.location.hash) ? window.location.hash : "";
    const getVideosByType = (type) => type ? videosInformation.filter(video => video.type === type) : videosInformation

    const renderVideo = () => {
        const currentType = getCurrentType();
        const videos = getVideosByType(currentType);

        const slicedVideo = showAll ? videos : videos.slice(0, MAX_VIDEO_LENGTH);
        moreButton.classList.remove('hidden');

        videoTypeButton.forEach(button => {
            button.classList.remove('active')
            if (button.hash === currentType) {
                button.classList.add('active')
            }
        })

        VideoPlayerModal.destroy();

        const videosHTML = slicedVideo.map(video => `
            <li class="video__wrap modal">
                <video playsinline class="video__player" poster="${video.poster}" preload="none">
                    ${video.sources.map(source => `<source src="${source}">`).join('')}
                    Your browser does not support the video tag.
                </video>
                <div class="description">
                    <div class="content">
                        <p class="description__title">${video.title}</p>
                        <!-- <span class="description__category">${video.category}</span> -->
                    </div> 
                    <button class="desc-button" data-role='play'>
                        <img src="../img/video-play.png" alt="play">
                        <span>Play</span>
                    </button>
                    <button class="desc-button" data-role='pause'>
                        <img src="../img/video-pause.png" alt="pause">
                        <span>Pause</span>
                    </button>
                </div>
            </li> 
        `).join('')

        videoContainer.innerHTML = videosHTML;
        VideoPlayerModal.init();

        if (videos.length < MAX_VIDEO_LENGTH || showAll) {
            moreButton.classList.add('hidden');
        }
    }

    const initButtonEventListeners = () => {
        renderVideo();

        window.addEventListener('hashchange', () => {
            showAll = false;
            renderVideo();
        })

        moreButton.addEventListener("click", () => {
            showAll = true;
            renderVideo();
        })
    }

    const submitEvent = () => {
        formOffer.policy && (formOffer.policy.checked = true);
        formOffer.onsubmit = withRecaptcha(offerHandler);
    }

    const offerHandler = (target, token) => {
        const data = new FormData(target);
        data.append('g-recaptcha-response', token);

        token && Mailer.send(data, '../backend/offer_form.php')
            .then(res => {
                if (res && res.success) {
                    target.reset();
                }
            })
    }

    const init = function () {
        moreButton && initButtonEventListeners();
        formOffer && submitEvent();
    };

    return {
        init: init,
    };
})();

export default Portfolio;
