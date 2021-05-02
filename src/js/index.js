import Companies from "./sliders/companies";
import Customers from "./sliders/customers";
import Header from "./components/header";
import Resources from "./sliders/resources";
import Calendar from "./components/calendly";
import PricingModal from "./components/pricing-modal";

const burger = document.getElementById("burger");

window.onload = function () {
    Customers.init();
    Companies.init();
    Resources.init();
    Calendar.init();
    Header.init();
    PricingModal.init();

    const dropdowns = document.querySelectorAll(".dropdown-button")

    dropdowns.forEach(elem => {
        elem.addEventListener("click", e=>{
            e.stopPropagation();
            elem.classList.toggle("active");
        })
        document.addEventListener("click", ()=>elem.classList.remove("active"))
    })

    burger.addEventListener("click", ({ target }) => {
        if (target.checked) {
            document.querySelector('html').style.overflow = "hidden";
        } else {
            document.querySelector('html').style.overflow = "auto";
        }
    })
};
