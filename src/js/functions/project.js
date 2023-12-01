import projects from '../helpers/projectsInfo.js';
import { createCardsBack } from '../components/CardBack.js';
import { handleURl } from './modal.js';
import { changeBackground } from '../functions/handleBackground.js';
export const btnProjects = document.querySelectorAll('.projects__btnOption');
export const projectsBack = document.querySelectorAll('.project__back--demo');
const projectsBackSection = document.querySelector('.projects__back');
const projectsFrontSection = document.querySelector('.work__container');
const circleAnimation = document.querySelector('.circle');

// set active class on button project section
const removeActive = () => {
    btnProjects.forEach((btn) => btn.classList.remove('active'));
};

const toggleCircleAnimate = () => {
    circleAnimation.classList.add('animate');
    setTimeout(() => {
        circleAnimation.classList.add('animate-reverse');
    }, 700);
    setTimeout(() => {
        circleAnimation.classList.remove('animate');
        circleAnimation.classList.remove('animate-reverse');
    }, 900);
};

export const handleClickFilterProject = (event) => {
    const btn = event.target;
    const filter = btn.dataset.filter;
    const projectBack = projects.backImgLinks;

    if (filter === 'game') return;

    removeActive(); // remove the class

    btn.classList.add('active');

    toggleCircleAnimate();

    if (filter === 'back') {
        setTimeout(() => changeBackground('dots'), 800);
        projectsFrontSection.classList.remove('active');
        projectsBackSection.classList.add('active');

        projectsBackSection.innerHTML = createCardsBack(projectBack);

        // add event listener for each cardBaCK
        const projectsBackLinks = projectsBackSection.querySelectorAll('.project__back--demo');
        projectsBackLinks.forEach((project) => project.addEventListener('click', (event) => handleURl(event, true)));
    }

    if (filter === 'front') {
        setTimeout(() => changeBackground('particles'), 800);
        projectsBackSection.classList.remove('active');
        projectsFrontSection.classList.add('active');
    }
};
