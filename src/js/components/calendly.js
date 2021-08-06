import { sendGoalToAllTrackers } from '../analytics/send-events';
import SEO_CODES from "../seo-codes/seo-code";

const Calendar = (function () {
    const calendly = document.getElementById("calendly");
    const calendlyBtn = document.getElementById("calendly_toggle");
    const container = document.querySelector(".touch-with .container");
    const openCalendlyModalBtn = document.querySelectorAll(".open-calendly");

    const initInlineCalendly = function () {
        Calendly.initInlineWidget({
            url: 'https://calendly.com/andykozik/30?back=1&month=2021-08&hide_event_type_details=1',
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
        Calendly.initPopupWidget({url: 'https://calendly.com/andykozik/30?back=1&month=2021-08'});
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
