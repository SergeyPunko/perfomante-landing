import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const NoBodyScroll = (function () {
    const burger = document.getElementById("burger");

    const init = function () {
        document.addEventListener("click", setHiddenBody);
        document.addEventListener("touchend", setHiddenBody);
    };

    const setHiddenBody = () => {
        if (
            [
                burger.checked,
                document.querySelector(".calendly-overlay")
            ].some(e => !!e)
        ) {
            document.querySelector('html').style.overflow = "hidden";
        } else {
            document.querySelector('html').style.overflow = "auto";
        }
    }

    return {
        init: init,
    };
})();

export default NoBodyScroll;
