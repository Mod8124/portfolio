import images from '../helpers/projectsInfo.js';
import { createAlert } from '../components/Alert.js';
import { isServerOut } from './alert.js';
import { createSkills } from '../components/Modal.js';
export const modal = document.querySelector('.modalImg');
const navScroll = document.querySelector('.navScroll');
const englishBtn = document.querySelector('.btn__language');
export const projects = document.querySelectorAll('.work__imgContainer'),
    modalImg = document.querySelector('.modalImg__img'),
    modalGithub = document.querySelector('.modalImg__linkSvg'),
    modalLink = document.querySelector('.modalImg__linkLink');

// modal's elements
const modalSkills = document.querySelector('.modalImg__skills');
const infoName = document.querySelector('.modalImg__infoShow--name');
const info = document.querySelector('.modalImg__infoShow--para');
const imgLinks = images.frontImgLinks;

const fakeImg = document.querySelector('.modalImg__fakeImgLoader');
// check if the hoisting server is working
export const handleURl = (event, server) => {
    event.preventDefault();
    const url = event.currentTarget.href;

    if (!server) return window.open(url, '_blank');

    const isLimit = isServerOut();

    if (isLimit) return createAlert();

    window.open(url, '_blank');
};

export function modalDisplay(index) {
    // hide the navBar if is active(top === '0px')
    let navScrollHeight = navScroll.offsetHeight;

    if (navScroll.style.top === '0px') {
        navScroll.style.top = `-${navScrollHeight + 8}px`;
    }

    // url imgs
    const fakeUrl =
        './assets/img/images/loaders/' + `${imgLinks[index].img}` + '.jpg';
    const urlImg =
        './assets/img/images/desktop/' + `${imgLinks[index].img}` + '.webp';

    const img = new Image();

    img.onload = function () {
        modalImg.src = img.src;
        modalImg.style.display = 'block';
        // Fade in the real image
        modalImg.style.opacity = '1';

        fakeImg.style.opacity = '0';
        setTimeout(() => (fakeImg.style.display = 'none'), 10);
    };

    fakeImg.src = fakeUrl;

    const doc = document.documentElement;
    doc.style.setProperty('--modal__heigth', `${window.innerHeight}px`);

    // modal display
    document.body.style.overflow = 'hidden'; // hide scroll bar

    modal.style.display = 'block';
    modalGithub.href = `${imgLinks[index].github}`;
    modalLink.textContent = `${imgLinks[index].url}`;
    modalLink.href = `${imgLinks[index].url}`;
    modalSkills.innerHTML = createSkills(index);

    img.src = urlImg;

    if (imgLinks[index].serverHosting) {
        modalLink.setAttribute('data-hosting', true);
    } else {
        modalLink.setAttribute('data-hosting', false);
    }

    if (englishBtn.classList.contains('active')) {
        info.innerHTML = imgLinks[index].info.EN;
        infoName.innerHTML = imgLinks[index].title.EN;
    } else {
        info.innerHTML = imgLinks[index].info.ES;
        infoName.innerHTML = imgLinks[index].title.ES;
    }
}

// check before send it the user to a new url if it's server hosting
modalLink.addEventListener('click', (event) => {
    const isServerHosting = event.target.dataset.hosting === 'true' && true;
    handleURl(event, isServerHosting);
});

export function modalNotDisplay(e) {
    if (
        e.target.classList.contains('modalImg__github') ||
        e.target.classList.contains('modalImg__imgContainer')
    ) {
        document.body.style.overflow = 'auto'; // auto scroll bar
        modal.style.display = 'none';
        modalImg.style.display = 'none';
        fakeImg.style.display = 'block';
        fakeImg.style.opacity = '1';
    }
}
