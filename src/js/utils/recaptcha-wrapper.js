import CaptchaModal from '../modals/captcha-modal';

window.onRecaptchaReady = (token) => {
  window.RCToken = token;
  CaptchaModal.close();
};

window.onCaptchaError = () => {
  alert('Captcha error, try again.');
  CaptchaModal.open();
};

window.onReEnter = () => {
  alert('Captcha error: it is expried. You have to re-enter captcha again.');
  CaptchaModal.open();
};

export const withRecaptcha = (cb) => (ev) => {
  ev.preventDefault();
  const target = ev.currentTarget;
  cb(target, true);

  // CaptchaModal.open();
  // let gcaptcha;
  // let int = setInterval(() => {
  //   if (window.RCToken) {
  //     gcaptcha = window.RCToken;
  //     cb(target, gcaptcha);
  //     window.RCToken = null;
  //     clearInterval(int);
  //   }
  // }, 100);
};
