import { acebi, close } from "../helpers/Imgs";
export const btnAccesibility = document.querySelector('.accesibilty');
export const btnRestartColorMain = document.querySelector('[data-color="--water_green"]');
export const btnRestartColorSecondary = document.querySelector('[data-color="--orange"]');
export const colorSelect__main = document.querySelector('.colorSelect__main')
export const colorSelect__secondary = document.querySelector('.colorSelect__secondary')
const modalAccesibility = document.querySelector('.accesibility__modal');
const rootELement = document.querySelector(":root");

export function handleToggleAccesibility(e) {

     if(!e.target.classList.contains('accesibility__img')) return
     
     modalAccesibility.classList.toggle('active');
     btnAccesibility.style.right = `${modalAccesibility.clientWidth}px`
    
    if(modalAccesibility.classList.contains('active')) {

      btnAccesibility.querySelector('.accesibility__img').src = close

    } else {

      btnAccesibility.querySelector('.accesibility__img').src = acebi
      btnAccesibility.style.right = '0px'

    }
}

export function handleRestartColors (e) {

  rootELement.style.setProperty(`${e.target.dataset.color}`,`${e.target.dataset.color === '--water_green' ? '#00ffff':'#ff8e31'}`)

  if(e.target.dataset.color === '--water_green') {
    colorSelect__main.value = '#00ffff'
  } else {
    colorSelect__secondary.value = '#ff8e31'
  }
}

export function handleColor (e) {
  rootELement.style.setProperty(`${e.target.dataset.key}`,`${e.target.value}`)
}
   