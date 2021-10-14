import tingle from 'tingle.js';

const ModalService = (() => {
    const renderModalContent = function (contentUrl) {
        let content;

        const modal = createModal();

        const xhr = new XMLHttpRequest();
        xhr.open('GET', contentUrl, false);
    
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return;
            content = this.responseText;
        };
        xhr.send();
    
        if (content) {
            modal.setContent(content);
            modal.open();
        }

        return modal;
    };

    const createModal = () => {
        const modal = new tingle.modal({
            closeMethods: ['button', 'escape'],
            onClose: () => {
                modal.destroy();
            },
        });

        return modal;
    }

    return {
        init: renderModalContent
    }
})()

export default ModalService;
