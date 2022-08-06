import imgLinks from "../helpers/imgLinks.js"

export const modal = document.querySelector('.modalImg')
export const projects = document.querySelectorAll('.work__imgContainer'),
modalImg = document.querySelector('.modalImg__img'),
modalGithub = document.querySelector('.modalImg__linkSvg'),
modalLink = document.querySelector('.modalImg__linkLink')

export function modalDisplay(index) {

    modal.style.display = 'block'
      modalImg.src = `${imgLinks[index].img}`
        modalGithub.href = `${imgLinks[index].github}`
        modalLink.textContent = `${imgLinks[index].url}`
    modalLink.href = `${imgLinks[index].url}`;
} 
  
export function modalNotDisplay(e) {
   if(e.target.classList.contains('modalImg__github') ||
      e.target.classList.contains('modalImg__imgContainer')) {

      modal.style.display = 'none'
    }
}
  