const Dropdowns = (function () {
    const dropdowns = document.querySelectorAll(".dropdown-button")

    const initEventListeners = function () {
        Array.prototype.slice.call(dropdowns).forEach(elem => {
            elem.addEventListener("click", e => {
                e.stopPropagation();
                elem.classList.toggle("active");
            })
        })
        document.addEventListener("click", () => Array.prototype.slice.call(dropdowns).forEach(elem => elem.classList.remove("active")));
    };

    const init = function () {
        initEventListeners();
    };

    return {
        init: init,
    };
})();

export default Dropdowns;
