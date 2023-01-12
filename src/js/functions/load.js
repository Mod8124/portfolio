const loading = document.querySelector('.loading');
import { isTop, navScroll } from './scroll.js';

export function handleLoading() {
    const active = sessionStorage.getItem('load');
    let currentScroll = window.pageYOffset;
    let navScrollHeight = navScroll.offsetHeight;

    if (!active) {
        sessionStorage.setItem('load', true);
    } else {
        loading.style.display = 'none';
        loading.style.animationPlayState = 'paused';
    }

    isTop(currentScroll, navScrollHeight);
}
