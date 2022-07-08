export const hambu = document.querySelector('.hambu')
const containerMobile = document.querySelector('.containMobile');
export const menuLinksMobile = document.querySelectorAll('.menuLink__link');

export function toggleHambu() {

    if(hambu.classList.contains('active')) {
  
       hambu.classList.remove('active')
        containerMobile.style.display = 'none'
  
     } else {

       hambu.classList.add('active')
        containerMobile.style.display='flex'

       setTimeout(()=> {
            containerMobile.classList.add('active')
       },100)
     }
}

