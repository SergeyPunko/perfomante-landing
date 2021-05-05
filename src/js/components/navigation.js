import jump from 'jump.js';

const Navigation = (function () {
    const scrollToSection = function (e) {
        const linkElem = this;
        const target = document.querySelector(linkElem.hash);
        const headerHeight = 88;

        jump(target, {
            offset: -headerHeight,
            duration: 1000,
        });

        e.preventDefault();
    };

    const highlightNavLink = function () {
        const sectionList = document.querySelectorAll('[data-navElement]');
        const offset = 200;

        Array.prototype.slice.call(sectionList).forEach((section) => {
            const sectionOffsetTop = section.getBoundingClientRect().top + window.pageYOffset - offset;
            const sectionHeight = section.getBoundingClientRect().height;
            const id = section.id;
            if (window.pageYOffset >= sectionOffsetTop && window.pageYOffset < sectionOffsetTop+sectionHeight+offset) {
                const currentlyActiveNavLinkElem = document.querySelector('.link.active');
                const activeNavLinkElem = document.querySelector(`.link[href="#${id}"]`);

                if (currentlyActiveNavLinkElem) {
                    currentlyActiveNavLinkElem.classList.remove('active');
                }

                if (activeNavLinkElem) {
                    activeNavLinkElem.classList.add('active');
                }
            } else {
                const activeNavLinkElem = document.querySelector('.link.active');
                activeNavLinkElem && activeNavLinkElem.hash.replace("#", "") === section.id && activeNavLinkElem.classList.remove('active');
            }
        });
    };

    const initEventListeners = function () {
        highlightNavLink();

        const navLinkList = document.querySelectorAll('.js-smooth-scroll');

        Array.prototype.slice.call(navLinkList).forEach((link) => {
            link.addEventListener('click', scrollToSection);
        });

        window.addEventListener('scroll', highlightNavLink);
    };

    const init = function () {
        initEventListeners();
    };

    return {
        init: init,
    };
})();

export default Navigation;
