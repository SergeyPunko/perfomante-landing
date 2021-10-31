import "babel-polyfill";
import Glide from "@glidejs/glide";

import Companies from "./sliders/companies";
import Customers from "./sliders/customers";
import Header from "./components/header";
import Resources from "./sliders/resources";
import Calendar from "./components/calendly";
import PricingModal from "./modals/pricing-modal";
import OfferModal from "./modals/offer-modal";
import Navigation from "./components/navigation";
import NoBodyScroll from "./utils/noBodyScroll";
import Dropdowns from "./components/dropdowns";
import ObjectFillPolyfill from "./utils/object-fit-polyfill";
import Portfolio from "./pages/portfolio";
import Videos from "./sliders/video";
import caseSlider from './sliders/case-slider'
import CaseContent from './pages/case'

// Инициализируем только необходимые скрипты для определенной страницы
export function initMainScript(page) {
    if (page === 'index') {
        Header.init();
        Dropdowns.init();
        ObjectFillPolyfill.init();
        Videos.init();
        Customers.init();
        Companies.init();
        Resources.init();
        Calendar.init();
        PricingModal.init();
        OfferModal.init();
        Navigation.init();
        NoBodyScroll.init();
    } else if (page === 'portfolio') {
        Header.init();
        Dropdowns.init();
        ObjectFillPolyfill.init();
        Customers.init();
        Companies.init();
        Resources.init();
        Calendar.init();
        PricingModal.init();
        OfferModal.init();
        Navigation.init();
        NoBodyScroll.init();
        Portfolio.init();
    } else if (page === 'cases') {
        Header.init();
        Dropdowns.init();
        ObjectFillPolyfill.init();
        caseSlider();
    } else if (page === 'case') {
        Header.init();
        Dropdowns.init();
        ObjectFillPolyfill.init();
        caseSlider();
        CaseContent.init();
    }
}
window.initMainScript = initMainScript;
