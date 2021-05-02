
const Header = (function () {
    const initStickyHeader = function () {
        const headerElem = document.querySelector('.header');
        if (window.pageYOffset > 0) {
            headerElem.style.transition = 'none';
            headerElem.classList.add('js-sticky');
        }
    };

    const toggleStickyHeader = function () {
        const headerElem = document.querySelector('.header');

        if (document.body.querySelector('.tingle-modal')) {
            return;
        }

        headerElem.removeAttribute('style');

        if (window.pageYOffset > 0) {
            headerElem.classList.add('js-sticky');
        } else {
            headerElem.classList.remove('js-sticky');
        }
    };

    const initEventListeners = function () {
        initStickyHeader();
        window.addEventListener('scroll', toggleStickyHeader);
    };

    const init = function () {
        initEventListeners();
    };

    return {
        init: init
    };

})();

export default Header;
