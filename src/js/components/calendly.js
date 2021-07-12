import { sendGoalToAllTrackers } from '../analytics/send-events';
import SEO_CODES from "../seo-codes/seo-code";

const Calendar = (function () {
    const calendly = document.getElementById("calendly");
    const calendlyBtn = document.getElementById("calendly_toggle");
    const container = document.querySelector(".touch-with .container");
    const openCalendlyModalBtn = document.querySelectorAll(".open-calendly");

    const initInlineCalendly = function () {
        Calendly.initInlineWidget({
            url: 'https://calendly.com/perfomante/30min?embed_domain=perfomante.io&hide_event_type_details=1&primary_color=337157',
            parentElement: calendly
        });
    };

    const initEventListeners = () => {
        calendlyBtn.addEventListener("click", ()=> container.classList.toggle("calendly--open"));
        Array.prototype.slice.call(openCalendlyModalBtn).forEach(element => {
            element.addEventListener("click", openModal(element))
        });
    }

    const openModal = ({ dataset }) => () => {
        sendGoalToAllTrackers(SEO_CODES[dataset.seoTarget]);
        Calendly.initPopupWidget({url: 'https://calendly.com/perfomante/30min?embed_domain=perfomante.io&embed_type=PopupText&primary_color=337157'});
    }
    const init = function () {
        if (calendly && calendlyBtn && container) {
            initInlineCalendly();
            initEventListeners();
        }
    };

    return {
        init: init
    };

})();

export default Calendar;
