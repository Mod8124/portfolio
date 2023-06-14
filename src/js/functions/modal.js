import images from '../helpers/projectsInfo.js';
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

export function modalDisplay(index) {
    // hide the navBar if is active(top === '0px')
    let navScrollHeight = navScroll.offsetHeight;

    if (navScroll.style.top === '0px') {
        navScroll.style.top = `-${navScrollHeight + 8}px`;
    }

    const doc = document.documentElement;
    doc.style.setProperty('--modal__heigth', `${window.innerHeight}px`);

    // modal display
    document.body.style.overflow = 'hidden'; // hide scroll bar

    modal.style.display = 'block';
    modalImg.src = `${imgLinks[index].img}`;
    modalGithub.href = `${imgLinks[index].github}`;
    modalLink.textContent = `${imgLinks[index].url}`;
    modalLink.href = `${imgLinks[index].url}`;
    modalSkills.innerHTML = createSkills(index);

    if (englishBtn.classList.contains('active')) {
        info.innerHTML = imgLinks[index].info.EN;
        infoName.innerHTML = imgLinks[index].title.EN;
    } else {
        info.innerHTML = imgLinks[index].info.ES;
        infoName.innerHTML = imgLinks[index].title.ES;
    }
}

// set skills icons to modal
export function createSkills(index) {
    return imgLinks[index].icons
        .map((icon) => {
            let lowerICons = icon.toLowerCase();
            if (lowerICons === 'rtk query') lowerICons = 'redux';
            if (lowerICons === 'vue-router') lowerICons = 'vue';
            return `
      <span class="modalImg__skill">
      <img class="modalImg__skillImg" src="./assets/img/icons/icon-${lowerICons}.svg" alt="">
      <h5>${icon}</h5>
      </span>
    `;
        })
        .join('');
}

export function modalNotDisplay(e) {
    if (
        e.target.classList.contains('modalImg__github') ||
        e.target.classList.contains('modalImg__imgContainer')
    ) {
        document.body.style.overflow = 'auto'; // auto scroll bar
        modal.style.display = 'none';
    }
}
