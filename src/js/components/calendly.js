const Calendar = (function () {
    const calendly = document.getElementById("calendly");

    const initCalendly = function () {
        Calendly.initInlineWidget({
            url: 'https://calendly.com/perfomante/30min?embed_domain=perfomante.io&hide_event_type_details=1',
            parentElement: calendly
        });
    };

    const init = function () {
        if (calendly) {
            initCalendly()
        }
    };

    return {
        init: init
    };

})();

export default Calendar;
