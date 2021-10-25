const ObjectFillPolyfill = (function () {
    const supportCSS = (prop) => {
        let support = false;
        if ('Moz' + prop in document.body.style) {
            support = true;
        }
        if ('webkit' + prop in document.body.style) {
            support = true;
        }
        if ('ms' + prop in document.body.style) {
            support = true;
        }
        if (prop in document.body.style) {
            support = true;
        }
        return support;
    }

    const createBGForElement = (elem) => {
        const src = elem.src;
        elem.style.backgroundImage = `url(${src})`;
        elem.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    }

    const init = function () {
        if (!supportCSS('objectFit')) {
            const elems = document.querySelectorAll(".object-fit");
            Array.prototype.slice.call(elems).forEach(createBGForElement);
        }
    };

    return {
        init: init,
    };
})();

export default ObjectFillPolyfill;
