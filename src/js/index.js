import "babel-polyfill";
import Companies from "./sliders/companies";
import Customers from "./sliders/customers";
import Header from "./components/header";
import Resources from "./sliders/resources";
import Calendar from "./components/calendly";
import PricingModal from "./components/pricing-modal";
import Navigation from "./components/navigation";
import NoBodyScroll from "./noBodyScroll";
import Dropdowns from "./components/dropdowns";
import ObjectFillPolyfill from "./object-fit-polyfill";
import VideoPlayers from "./components/video-player";

window.onload = function () {
    ObjectFillPolyfill.init();
    Customers.init();
    Companies.init();
    Resources.init();
    Calendar.init();
    Header.init();
    PricingModal.init();
    Navigation.init();
    NoBodyScroll.init();
    Dropdowns.init();
    VideoPlayers.init();
};
