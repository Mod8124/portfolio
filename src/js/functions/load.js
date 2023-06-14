import { language } from '../functions/language.js';
import { isTop, navScroll } from './scroll.js';
const loading = document.querySelector('.loading');
const btnsLanguage = document.querySelectorAll('.btn__language');

export function handleLoading() {
    const active = sessionStorage.getItem('load');
    let currentScroll = window.pageYOffset;
    let navScrollHeight = navScroll.offsetHeight;

    const userLang = navigator.language || navigator.userLanguage;

    if (userLang.includes('es')) {
        language(false); // set to spanish
        btnsLanguage[0].classList.remove('active'); // remove active english language
        btnsLanguage[1].classList.add('active'); // set active spanish language
    }

    if (!active) {
        sessionStorage.setItem('load', true);
    } else {
        loading.style.display = 'none';
        loading.style.animationPlayState = 'paused';
    }

    isTop(currentScroll, navScrollHeight);
}
