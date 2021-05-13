import Mailer from "../services/mailer.service";
import { sendYMGoal } from '../analytics/send-events';
import ModalService from '../services/modal.service';
import { withRecaptcha } from "../utils/recaptcha-wrapper";
import SEO_CODES from "../seo-codes/seo-code";

const modalHandler = (modal, seoTarget) => (target, token) => {
    const data = new FormData(target);
    data.append('g-recaptcha-response', token);

    token && Mailer.send(data, 'backend/offer_form.php')
        .then(res => {
            if (res.success) {
                sendYMGoal(SEO_CODES[seoTarget]);
                modal.close();

                ModalService.init('modals/success.html');
            }
        })
}

const OfferModal = (function () {
    const createModal = ({ dataset }) => () => {
        sendYMGoal(SEO_CODES[dataset.seoTarget]);

        const modal = ModalService.init('modals/offer.html');

        const form = document.getElementById('models-form');
        form.onsubmit = withRecaptcha(modalHandler(modal, dataset.submitSeoTarget))
    };

    const initButtonEventListeners = function () {
        // pricing form success modals
        if (document.querySelector('.offer__modal')) {
            const pricingModalBtnsList = document.querySelectorAll('.offer__modal');

            Array.prototype.slice.call(pricingModalBtnsList).forEach((item) => {
                // add event listener on each pricing button
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
