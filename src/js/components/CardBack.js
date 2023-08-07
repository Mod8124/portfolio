import { svgFile, svgGithub, svgLink } from '../helpers/SvgFiles.js';
const englishBtn = document.querySelector('.btn__language');

const CreateStacks = (icons) => {
    return icons
        .map((icon) => {
            let lowerICons = icon.toLowerCase();
            return `
             <figure class="modalImg__skill">
                                <img
                                    class="modalImg__skillImg"
                                    src="./assets/img/icons/icons__stack/icon-${lowerICons}.svg"
                                    alt="icon-${lowerICons}"
                                />
                                <p class="skills__paragraph">${icon}</p>
            </figure>
    `;
        })
        .join('');
};

export const CardBack = (project) => {
    const { github, icons, info, title, url } = project;
    const stackIconsHTML = CreateStacks(icons);
    const lng = englishBtn.classList.contains('active') ? 'EN' : 'ES';
    return `<article class="project__back">
                  <div class="project__back--links">
                        ${svgFile}
                    <div class="project__code">
                        <a href="${github}" target="_blank">
                            ${svgGithub}
                        </a>

                        <a
                            href="${url}"
                            target="_blank"
                            class="project__back--demo"
                        >
                        ${svgLink}
                        </a>
                    </div>
                </div>
                  <h3 class="project__backTitle">${title[lng]}</h3>
                   <p class="project__backParagraph">
                        ${info[lng]}
                   </p>
                      <div class="project__backSkills">
                      ${stackIconsHTML}
                      </div>
            </article>
    `;
};

export const createCardsBack = (projects) => {
    return projects
        .map((project) => {
            return `${CardBack(project)}`;
        })
        .join('');
};
