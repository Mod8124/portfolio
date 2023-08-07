const btnAccesibility = document.querySelector('.accesibilty');
const modalAccesibility = document.querySelector('.accesibility__modal');
export const navScroll = document.querySelector('.navScroll');
export const sections = document.querySelectorAll('.wrap');
export const links = document.querySelectorAll('.navBarLinks');
let prevScroll = window.pageYOffset;

export const isTop = (currentHeight, navHeight) => {
    if (currentHeight > navHeight) {
        navScroll.classList.add('active');
    } else {
        navScroll.classList.remove('active');
    }
};

export const activeLink = (link) => {
    links.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
};

export const checkSection = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.dataset.id;

        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`.navBar [href='#${id}']`);
            activeLink(target);
        }
    });
};

export const handleScroll = () => {
    let currentScroll = window.pageYOffset;
    let navScrollHeight = navScroll.offsetHeight;
    if (window.scrollY > 60) {
        btnAccesibility.classList.add('active');
    } else {
        btnAccesibility.classList.remove('active');
        if (modalAccesibility.classList.contains('active')) {
            modalAccesibility.classList.remove('active');
            btnAccesibility.style.right = '0px';
            btnAccesibility.querySelector('.accesibility__img').src =
                './assets/img/icons/icons/icon__acebi.svg';
        }
    }

    isTop(currentScroll, navScrollHeight);

    if (prevScroll > currentScroll) {
        navScroll.style.top = '0';
    } else {
        navScroll.style.top = `-${navScrollHeight + 8}px`;
    }

    prevScroll = currentScroll;

    checkSection();
};
