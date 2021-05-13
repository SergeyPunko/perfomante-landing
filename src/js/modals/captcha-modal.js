import tingle from 'tingle.js';

export const GA_CLIENT_TOKEN = '6Ld1TfUUAAAAADqxb7ggrpb0_ry8-BazzM0RsiCN';

const CaptchaModal = (function () {
  const Modal = new tingle.modal({
    closeMethods: ['button', 'escape'],
    cssClass: ['tingle-top']
  });
  const OpenCaptchaModal = function () {
    const content =
      '<div data-expired-callback="onReEnter" data-callback="onRecaptchaReady" data-error-callback="onCaptchaError" id="gc"></div>';
    Modal.setContent(content);
    Modal.open();
    grecaptcha.render('gc', {
      sitekey: GA_CLIENT_TOKEN,
      theme: 'dark',
    });
  };

  const CloseCaptchaModal = function () {
    grecaptcha.reset();
    Modal.setContent('');
    Modal.close();
  };

  return {
    open: OpenCaptchaModal,
    close: CloseCaptchaModal,
  };
})();
export default CaptchaModal;
