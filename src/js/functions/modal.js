import imgLinks from "../helpers/imgLinks.js";

export const modal = document.querySelector('.modalImg')
export const projects = document.querySelectorAll('.work__imgContainer'),
modalImg = document.querySelector('.modalImg__img'),
modalGithub = document.querySelector('.modalImg__linkSvg'),
modalLink = document.querySelector('.modalImg__linkLink')

//new thing info about the project
const englishBtn = document.querySelector('.btn__language');
const modalSkills = document.querySelector('.modalImg__skills');
const infoName = document.querySelector('.modalImg__infoShow--name');
const info = document.querySelector('.modalImg__infoShow--para');


export function modalDisplay(index) {

    modal.style.display = 'block';
      modalImg.src = `${imgLinks[index].img}`
        modalGithub.href = `${imgLinks[index].github}`
        modalLink.textContent = `${imgLinks[index].url}`
    modalLink.href = `${imgLinks[index].url}`;
    modalSkills.innerHTML = createSkills(index);
    infoName.innerHTML = imgLinks[index].title;


   if (englishBtn.classList.contains('active')) {
      info.innerHTML = imgLinks[index].info.EN
   } else {
      info.innerHTML = imgLinks[index].info.ES
   }
} 

export function createSkills(index) {
  return imgLinks[index].icons.map((icon) => {

    let lowerICons = icon.toLowerCase();
    if (lowerICons === 'rtk query') lowerICons = 'redux';
    if (lowerICons === 'vue-router') lowerICons = 'vue'
    return `
      <span class="modalImg__skill">
      <img class="modalImg__skillImg" src="./assets/img/icons/icon-${lowerICons}.svg" alt="">
      <h5>${icon}</h5>
      </span>
    `
  });
}
  
export function modalNotDisplay(e) {
   if(e.target.classList.contains('modalImg__github') ||
      e.target.classList.contains('modalImg__imgContainer')) {

      modal.style.display = 'none'
    }
}
  