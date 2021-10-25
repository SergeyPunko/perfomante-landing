import Mailer from "../services/mailer.service";
import {withRecaptcha} from "../utils/recaptcha-wrapper";
import {TYPE, videosInformation} from "./videos";

const Portfolio = (function () {
    const MAX_VIDEO_LENGTH = 9;
    let showAll = false

    const moreButton = document.querySelector('button.more-link');
    const videoContainer = document.querySelector('.videos-section .video');
    const videoTypeButton = document.querySelectorAll('.category__navigation-item > a');
    const formOffer = document.querySelector('.touch-with-us .form-offer')
    let currentVimeoPlayers = [];

    const getCurrentType = () => Object.values(TYPE).includes(window.location.hash) ? window.location.hash : "";
    const getVideosByType = (type) => type ? videosInformation.filter(video => video.type === type) : videosInformation

    const renderVideo = () => {
        pauseAllVimeoPlayers();
        const currentType = getCurrentType();
        const videos = getVideosByType(currentType);

        const slicedVideo = showAll ? videos.slice(MAX_VIDEO_LENGTH) : videos.slice(0, MAX_VIDEO_LENGTH);
        moreButton.classList.remove('hidden');

        videoTypeButton.forEach(button => {
            button.classList.remove('active')
            if (button.hash === currentType) {
                button.classList.add('active')
            }
        })

        const videosHTML = slicedVideo.map(video =>`
            <li class="video__wrap modal">
                <div class="video__overlay" style="background-image: url(${video.poster})"></div>
                <div class="video__player" id="${video.id}" ></div>  
                <div class="video__play">
                <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.608c0-1.57 1.728-2.528 3.06-1.696l10.226 6.392a2 2 0 010 3.392L4.06 18.087C2.728 18.92 1 17.962 1 16.392V3.607z" stroke="#fff" stroke-width="2"/></svg>Play
</div>
                <div class="video__description">${video.title}</div>                              
            </li> 
        `);

        if (showAll) {
            videoContainer.innerHTML += videosHTML.join('');
        } else {
            videoContainer.innerHTML = videosHTML.join('');
        }

        if (videos.length < MAX_VIDEO_LENGTH || showAll) {
            moreButton.classList.add('hidden');
        }

        setPlayersHandlers(videos);
    }

    const initButtonEventListeners = () => {
        window.addEventListener('hashchange', () => {
            showAll = false;
            renderVideo();
        });

        moreButton.addEventListener("click", () => {
            showAll = true;
            renderVideo();
        });
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
        renderVideo();
        moreButton && initButtonEventListeners();
        formOffer && submitEvent();
    };

    const setPlayersHandlers = function(videos) {
        const players = [];

        videos.map(video => {
            const videoBlock = document.getElementById(`${video.id}`);
            if (videoBlock) {
                const videoCont = videoBlock.parentElement;
                const playButtons = videoCont.querySelectorAll('.video__overlay, .video__play');
                const player = new Vimeo.Player(`${video.id}`, {
                    responsive: true,
                    keyboard: false,
                    byline: false,
                    portrait: false,
                    controls: true,
                    playsinline: false,
                    autopause: false,
                    title: false,
                    url: video.sources[0]
                });

                playButtons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        pauseAllVimeoPlayers();
                        player.play();
                        videoCont.classList.add('started');
                        videoCont.classList.add('playing');
                    });
                });

                players.push(player);
            }
        });

        currentVimeoPlayers = players;
    }

    const pauseAllVimeoPlayers = function () {
        currentVimeoPlayers.forEach(player => {
            player.pause();
        });
    }

    return {
        init: init,
    };
})();

export default Portfolio;
