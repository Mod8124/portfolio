const btnAccesibility = document.querySelector('.accesibilty');
const modalAccesibility = document.querySelector('.accesibility__modal');

export const handleScroll = () => {

    if(window.scrollY > 60) {
      btnAccesibility.style.display = 'flex'
    } else {
      btnAccesibility.style.display = 'none'
  
      if(modalAccesibility.classList.contains('active')) {
          modalAccesibility.classList.remove('active');
          btnAccesibility.style.right = '0px'
         btnAccesibility.querySelector('.accesibility__img').src = './img/images/icon-acebi.svg'
      }
    }
}