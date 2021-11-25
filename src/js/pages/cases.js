import { cases } from "./case-content"

const CasesContent = (function () {

    const addContent = () => {
        const casesList = document.querySelector('.cases__list');

        Object.entries(cases).forEach(([_, value]) => {
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

export default CasesContent;
