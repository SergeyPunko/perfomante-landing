import tingle from 'tingle.js';
import Mailer from "../mailer";
import { sendYMGoal } from '../analytics/send-events';

const renderModalContent = function (modalRef, contentUrl) {
    let content;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', contentUrl, false);

    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        content = this.responseText;
    };
    xhr.send();

    if (content) {
        modalRef.setContent(content);
        modalRef.open();
    }
};

const PricingModal = (function () {
    const PricingModal = function (e) {
        e.preventDefault();
        const btnElem = this;
        const index = btnElem.dataset.index;

        const PricingModal = new tingle.modal({
            closeMethods: ['button', 'escape'],
            onClose: () => {
                PricingModal.destroy();
            },
        });

        renderModalContent(PricingModal, 'modals/pricing.html');

        const modelsOptions = document.modelsForm.optionsChoise;

        if (index) {
            modelsOptions[index].checked = true;
        } else {
            document.modelsForm.querySelector(".form-group").classList.add("hidden")
            document.modelsForm.querySelector("h2").textContent = "Order request"
        }

        updateSelectedOption();

        for (var i = 0; i < modelsOptions.length; i++) {
            modelsOptions[i].addEventListener('change', function () {
                document.getElementById('types').checked = false;
                updateSelectedOption();
            });
        }

        function updateSelectedOption() {
            let value = modelsOptions.value ? modelsOptions.value : 'Options';
            document.getElementById('selectedOption').textContent = value;
        }

        const form = document.getElementById('models-form');
        form.onsubmit = (e) => {
            e.preventDefault()

            const data = new FormData(form);
            Mailer.send(data, 'backend/form.php')
                // .then(res =>{
                //     if(res.success) {
                //         sendYMGoal('main - plans - order pop-up');

                //     }
                // })
        }
    };

    const initButtonEventListeners = function () {
        // pricing form success modals
        if (document.querySelector('.order__modal')) {
            const PricingModalBtnsList = document.querySelectorAll('.order__modal');

            Array.prototype.slice.call(PricingModalBtnsList).forEach((item) => {
                // add event listener on each pricing button
                item.addEventListener('click', PricingModal);
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
