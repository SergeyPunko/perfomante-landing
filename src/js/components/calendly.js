const Calendar = (function () {
    const calendly = document.getElementById("calendly");
    const calendlyBtn = document.getElementById("calendly_toggle");
    const container = document.querySelector(".touch-with .container");

    const initCalendly = function () {
        Calendly.initInlineWidget({
            url: 'https://calendly.com/perfomante/30min?embed_domain=perfomante.io&hide_event_type_details=1&primary_color=337157',
            parentElement: calendly
        });
    };

    const initEventListeners = () => {
        calendlyBtn.addEventListener("click", ()=> container.classList.toggle("calendly--open"))
    }

    const init = function () {
        if (calendly && calendlyBtn && container) {
            initCalendly();
            initEventListeners();
        }
    };

    return {
        init: init
    };

})();

export default Calendar;
