import { cases } from "./case-content"

const CaseContent = (function () {
    const urlParams = new URLSearchParams(window.location.search);
    const company = urlParams.get('company');

    const addContent = () => {
        if(!company && !cases[company] && !window.location.href.includes("cases")) {
            window.location.href = `${window.location.origin}/cases`;
        }

        const chellenges = document.querySelector('.chellenges');
        const companyInformation = document.querySelector('.company-info');
        const solution = document.querySelector('.solution');
        const feedback = document.querySelector('.client-feedback');
        const clientName = document.querySelector('.castomer__user-name');
        const clientPosition = document.querySelector('.castomer__user-work');
        const clientLogo = document.querySelector('.client-logo');
        const companyLogo = document.querySelector('.company-logo');
        const metrics = document.querySelector('.case-castomer__list');

        const companyContent = cases[company];

        chellenges.textContent = companyContent.challenges;
        companyInformation.textContent = companyContent.companyInformation;
        solution.textContent = companyContent.solution;
        feedback.textContent = companyContent.clientFeedback;
        clientName.textContent = companyContent.clientName;
        clientPosition.textContent = companyContent.clientPosition;
        clientLogo.src = companyContent.clientPhotoUrl;
        companyLogo.src = companyContent.companyLogo;
        companyContent.metrics.forEach(metric => {
            const element = document.createElement("div");
            element.classList.add("case-castomer__item");
            element.textContent = metric;
            metrics.appendChild(element);
        })
    } 

    return {
        init: addContent,
    };
})();

export default CaseContent;
