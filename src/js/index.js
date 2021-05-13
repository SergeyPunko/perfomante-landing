import "babel-polyfill";
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
import VideoPlayers from "./components/video-player";

window.onload = function () {
    Header.init();
    ObjectFillPolyfill.init();
    Customers.init();
    Companies.init();
    Resources.init();
    Calendar.init();
    PricingModal.init();
    OfferModal.init();
    Navigation.init();
    NoBodyScroll.init();
    Dropdowns.init();
    VideoPlayers.init();
};
