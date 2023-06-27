export const btnProjects = document.querySelectorAll('.projects__btnOption');
export const projectsBack = document.querySelectorAll('.project__back--demo');
const projectsBackSection = document.querySelector('.projects__back');
const projectsFrontSection = document.querySelector('.work__container');

// set active class on button project section
const removeActive = () => {
    btnProjects.forEach((btn) => btn.classList.remove('active'));
};

export const handleClickFilterProject = (event) => {
    removeActive(); // remove the class
    const btn = event.target;
    const filter = btn.dataset.filter;
    if (filter === 'game') return;

    btn.classList.add('active');

    if (filter === 'back') {
        projectsFrontSection.classList.remove('active');
        projectsBackSection.classList.add('active');
    }

    if (filter === 'front') {
        projectsBackSection.classList.remove('active');
        projectsFrontSection.classList.add('active');
    }
};
