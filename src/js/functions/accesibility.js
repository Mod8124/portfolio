import { setParticle } from './setParticles.js';

export const btnAccesibility = document.querySelector('.accesibilty');
export const btnRestartColorMain = document.querySelector(
    '[data-color="--water_green"]'
);
export const btnRestartColorSecondary = document.querySelector(
    '[data-color="--orange"]'
);
export const colorSelect__main = document.querySelector('.colorSelect__main');
export const colorSelect__secondary = document.querySelector(
    '.colorSelect__secondary'
);
const modalAccesibility = document.querySelector('.accesibility__modal');
const rootELement = document.querySelector(':root');

export function handleToggleAccesibility(e) {
    if (!e.target.classList.contains('accesibility__img')) return;

    modalAccesibility.classList.toggle('active');
    btnAccesibility.style.right = `${modalAccesibility.clientWidth}px`;

    if (modalAccesibility.classList.contains('active')) {
        btnAccesibility.querySelector('.accesibility__img').src =
            './assets/img/icons/icons/icon__close.svg';
    } else {
        btnAccesibility.querySelector('.accesibility__img').src =
            './assets/img/icons/icons/icon__acebi.svg';
        btnAccesibility.style.right = '0px';
    }
}

export function handleRestartColors(e) {
    const waterColor = '#00ffff';
    const orangeColor = '#ff8e31';
    const nameColor = e.target.dataset.color;
    rootELement.style.setProperty(
        `${nameColor}`,
        `${
            e.target.dataset.color === '--water_green'
                ? waterColor
                : orangeColor
        }`
    );

    if (nameColor === '--water_green') {
        setParticle(waterColor);
        colorSelect__main.value = waterColor;
    } else {
        colorSelect__secondary.value = orangeColor;
    }
}

export function handleColor(e) {
    const [rootName, newColor] = [e.target.dataset.key, e.target.value];
    if (rootName === '--water_green') setParticle(newColor);
    rootELement.style.setProperty(`${rootName}`, `${newColor}`);
}
