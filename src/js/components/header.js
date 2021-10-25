
const Header = (function () {
    const headerElem = document.querySelector('.header');

    const initStickyHeader = function () {
        if (window.pageYOffset > 0) {
            headerElem.style.transition = 'none';
            headerElem.classList.add('js-sticky');
        }
    };

    const toggleStickyHeader = function () {
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
