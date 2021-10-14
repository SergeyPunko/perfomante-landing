import Mailer from "../services/mailer.service";
import { sendGoalToAllTrackers } from '../analytics/send-events';
import ModalService from '../services/modal.service';
import { withRecaptcha } from "../utils/recaptcha-wrapper";
import SEO_CODES from "../seo-codes/seo-code";

const modalHandler = (modal, seoTarget) => (target, token) => {
    const data = new FormData(target);
    data.append('g-recaptcha-response', token);

    token && Mailer.send(data, 'backend/price_form.php')
        .then(res => {
            if (res.success) {
                modal.close();
                sendGoalToAllTrackers(SEO_CODES[seoTarget]);
                ModalService.init('modals/success.html');
            }
        })
}

const PricingModal = (function () {
    const updateSelectedOption = () => {
        const option = document.modelsForm.option;

        let value = option.value ? option.value : 'Options';
        document.getElementById('selectedOption').textContent = value;
    }

    const createModal = function (e) {
        e.preventDefault();
        const btnElem = this;
        const dataset = btnElem.dataset;

        const index = dataset.index

        sendGoalToAllTrackers(SEO_CODES[dataset.seoTarget]);
        const modal = ModalService.init('modals/pricing.html');

        const modelsOptions = document.modelsForm.option;

        if (index) {
            modelsOptions[index].checked = true;
        }

        updateSelectedOption();

        for (let i = 0; i < modelsOptions.length; i++) {
            modelsOptions[i].addEventListener('change', function () {
                document.getElementById('types').checked = false;
                updateSelectedOption();
            });
        }

        const form = document.getElementById('models-form');
        form.onsubmit = withRecaptcha(modalHandler(modal, dataset.submitSeoTarget));
    };

    const initButtonEventListeners = function () {
        if (document.querySelector('.order__modal')) {
            const pricingModalBtnsList = document.querySelectorAll('.order__modal');

            Array.prototype.slice.call(pricingModalBtnsList).forEach((item) => {
                item.addEventListener('click', createModal);
            });
        }
    };

    const init = function () {
        initButtonEventListeners();
    };

    return {
        init: init,
    };
})();

export default PricingModal;
