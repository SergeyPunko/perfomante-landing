import { cases } from "./case-content"

const CaseContent = (function () {
    const urlParams = new URLSearchParams(window.location.search);
    const company = urlParams.get('company');

    const addContent = () => {
        if(!company && !cases[company] && !window.location.href.includes("cases")) {
            window.location.href = `${window.location.origin}/cases`;
        }

        const chellenges = document.querySelector('.chellenges');
        const companyTitle = document.querySelector('.company-title');
        const companyInformation = document.querySelector('.company-info');
        const solution = document.querySelector('.solution');
        const feedback = document.querySelector('.client-feedback');
        const clientName = document.querySelector('.castomer__user-name');
        const clientPosition = document.querySelector('.castomer__user-work');
        const clientLogo = document.querySelector('.client-logo');
        const companyLogo = document.querySelector('.company-logo');
        const metrics = document.querySelector('.case-castomer__list');
        const topCase = document.querySelector('.case-banner__precent');
        const topCaseText = document.querySelector('.case-banner__small-title');
        const videosFrame = document.querySelectorAll('.vimeo__iframe');
        const casesList = document.querySelector('.cases__list');

        const companyContent = cases[company];

        companyTitle.textContent = companyContent.title;
        topCase.textContent = companyContent.topCase;
        topCaseText.textContent = companyContent.topCaseText;
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
        });

        Object.entries(cases).filter(([key])=> key !== company).forEach(([_, value]) => {
            casesList.innerHTML = casesList.innerHTML + `
                <a class="case-link" href="${value.url}"> 
                    <div class="case-link__top">
                        <div class="case-link__logo case-banner__logo"><img src="${value.companyLogo}" alt=""></div>
                        <div class="case-link__procent case-banner__precent"><span>${value.topCase}</span></div>
                        <h3 class="case-banner__small-title">${value.topCaseText} </h3>
                    </div>
                    <div class="case-link__bottom"> 
                        <h4 class="case-link__tag">2D VIDEO</h4>
                        <div class="case-link__name">${value.title}</div>
                    </div>
                </a>
            `
        })
    } 

    return {
        init: addContent,
    };
})();

export default CaseContent;
