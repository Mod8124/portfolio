export const hambu = document.querySelector('.hambu');
const containerMobile = document.querySelector('.containMobile');
export const menuLinksMobile = document.querySelectorAll('.menuLink__link');

export function toggleHambu() {
    if (hambu.classList.contains('active')) {
        hambu.classList.remove('active');
        containerMobile.style.display = 'none';
        setTimeout(() => {
            containerMobile.classList.remove('active');
        }, 10);
    } else {
        hambu.classList.add('active');
        containerMobile.style.display = 'flex';

        setTimeout(() => {
            containerMobile.classList.add('active');
        }, 10);
    }
}
