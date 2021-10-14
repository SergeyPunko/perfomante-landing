import { sendGoalToAllTrackers } from '../analytics/send-events';
import SEO_CODES from "../seo-codes/seo-code";

const Calendar = (function () {
    const calendly = document.getElementById("calendly");
    const calendlyBtn = document.getElementById("calendly_toggle");
    const container = document.querySelector(".touch-with .container");
    const openCalendlyModalBtn = document.querySelectorAll(".open-calendly");

    const initInlineCalendly = function () {
        if(calendly) {
            Calendly.initInlineWidget({
                url: 'https://calendly.com/perfomante/30min?back=1&hide_event_type_details=1',
                parentElement: calendly
            });
        }
    };

    const initEventListeners = () => {
        if(calendlyBtn) {
            calendlyBtn.addEventListener("click", ()=> container.classList.toggle("calendly--open"));
        }
        if(openCalendlyModalBtn.length) {
            Array.prototype.slice.call(openCalendlyModalBtn).forEach(element => {
                element.addEventListener("click", openModal(element))
            });
        }
    }

    const openModal = ({ dataset }) => () => {
        sendGoalToAllTrackers(SEO_CODES[dataset.seoTarget]);
        Calendly.initPopupWidget({url: 'https://calendly.com/perfomante/30min?back=1'});
    }
    const init = function () {
        initInlineCalendly();
        initEventListeners();
    };

    return {
        init: init
    };

})();

export default Calendar;
