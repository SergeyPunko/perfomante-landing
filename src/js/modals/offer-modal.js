import Mailer from "../services/mailer.service";
import { sendGoalToAllTrackers } from '../analytics/send-events';
import ModalService from '../services/modal.service';
import { withRecaptcha } from "../utils/recaptcha-wrapper";
import SEO_CODES from "../seo-codes/seo-code";

const modalHandler = (modal, seoTarget) => (target, token) => {
    const data = new FormData(target);
    data.append('g-recaptcha-response', token);

    token && Mailer.send(data, 'backend/offer_form.php')
        .then(res => {
            if (res.success) {
                sendGoalToAllTrackers(SEO_CODES[seoTarget]);
                modal.close();

                ModalService.init('modals/success.html');
            }
        })
}

const OfferModal = (function () {
    const createModal = ({ dataset }) => () => {
        sendGoalToAllTrackers(SEO_CODES[dataset.seoTarget]);

        const modal = ModalService.init('modals/offer.html');

        const form = document.getElementById('models-form');
        form.onsubmit = withRecaptcha(modalHandler(modal, dataset.submitSeoTarget))
    };

    const initButtonEventListeners = function () {
        if (document.querySelector('.offer__modal')) {
            const pricingModalBtnsList = document.querySelectorAll('.offer__modal');

            Array.prototype.slice.call(pricingModalBtnsList).forEach((item) => {
                item.addEventListener('click', createModal(item), false);
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

export default OfferModal;
