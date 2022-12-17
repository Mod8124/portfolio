import { hambu, toggleHambu, menuLinksMobile } from './js/functions/hambu.js';
import { handleLoading } from './js/functions/load.js';
import { observer, hiddenElements } from './js/functions/animation.js';
import { handleScroll } from './js/functions/scroll.js';
import {
  modal,
  modalDisplay,
  modalNotDisplay,
  projects,
} from './js/functions/modal.js';
import {
  btnAccesibility,
  btnRestartColorMain,
  btnRestartColorSecondary,
  colorSelect__main,
  colorSelect__secondary,
  handleToggleAccesibility,
  handleRestartColors,
  handleColor,
} from './js/functions/accesibility.js';
import { languageBtns, handleLanguage } from './js/functions/language.js';

window.addEventListener('load', handleLoading);
window.addEventListener('scroll', handleScroll);

// modal
modal.addEventListener('click', modalNotDisplay);
projects.forEach((img, index) => {
  img.addEventListener('click', () => modalDisplay(index));
});

//particles
particlesJS.load('particles-js', './particle.json');

// // accesibility
colorSelect__main.addEventListener('input', handleColor);
colorSelect__secondary.addEventListener('input', handleColor);
btnAccesibility.addEventListener('click', handleToggleAccesibility);
btnRestartColorMain.addEventListener('click', handleRestartColors);
btnRestartColorSecondary.addEventListener('click', handleRestartColors);

// //accesibility languages
languageBtns.forEach((btn) => btn.addEventListener('click', handleLanguage));

// //toggleHambu
hambu.addEventListener('click', toggleHambu);
menuLinksMobile.forEach((button) => {
  button.addEventListener('click', toggleHambu);
});

// //animation
hiddenElements.forEach((el) => observer.observe(el));
