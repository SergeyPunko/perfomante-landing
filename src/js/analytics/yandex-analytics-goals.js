const YandexAnalyticsGoals = (() => {
  const initListeners = () => {
    const bookCallButtons = document.querySelectorAll('.book-call');
    const priceAnimation = document.getElementById('price-animation');
    const priceScriptAnimation = document.getElementById('price_script-animation');
    const priceScriptArtAnimation = document.getElementById('price_script-art-animation');
    const pricePerfomanter = document.getElementById('price_perfomanter');

    // init book call button
    if (bookCallButtons.length > 0) {
      bookCallButtons.forEach((element, index) => {
        element.addEventListener('click', (e) => {
          console.log('book call');
          Calendly.initPopupWidget({
            url: 'https://calendly.com/perfomante/30min',
          });
          ym(54065377, 'reachGoal', 'book-call');
          return false;
        });
      });
    }

    // price animation
    if (priceAnimation !== null) {
      priceAnimation.addEventListener('click', (e) => {
        ym(54065377, 'reachGoal', 'price_animation');
        return true;
      });
    }

    // price script animation
    if (priceScriptAnimation !== null) {
      priceScriptAnimation.addEventListener('click', () => {
        ym(54065377, 'reachGoal', 'price_script-animation');
        return true;
      });
    }

    // price script art animation
    if (priceScriptArtAnimation !== null) {
      priceScriptArtAnimation.addEventListener('click', () => {
        ym(54065377, 'reachGoal', 'price_script-art-animation');
        return true;
      });
    }

    // price 'perfomanter'
    if (pricePerfomanter !== null) {
      pricePerfomanter.addEventListener('click', () => {
        ym(54065377, 'reachGoal', 'price_perfomanter');
        return true;
      });
    }
  };

  const initCaseStudiesGoals = () => {
    const case1DetailsButton = document.getElementById('cases-case1');
    const case2DetailsButton = document.getElementById('cases-case2');
    const case3DetailsButton = document.getElementById('cases-case3');

    // init details button
    if (case1DetailsButton !== null) {
      case1DetailsButton.addEventListener('click', () => {
        ym(54065377, 'reachGoal', 'cases_case1-details-click');
        return false;
      });
    }

    if (case2DetailsButton !== null) {
      case2DetailsButton.addEventListener('click', () => {
        ym(54065377, 'reachGoal', 'cases_case2-details-click');
        return false;
      });
    }

    if (case3DetailsButton !== null) {
      case3DetailsButton.addEventListener('click', () => {
        ym(54065377, 'reachGoal', 'cases_case3-details-click');
        return false;
      });
    }

    // init case2 video buttons
    const case2VideButtons = document.getElementsByClassName('case2_video-btn');
    for (let i = 0; i < case2VideButtons.length; i++) {
      case2VideButtons[i].addEventListener('click', () => {
        ym(54065377, 'reachGoal', 'cases_case2-video-button-click');
        return false;
      });
    }
  };

  const init = () => {
    initListeners();
    initCaseStudiesGoals();
  };

  return {
    init: init,
  };
})();

export default YandexAnalyticsGoals;
