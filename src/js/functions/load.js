const loading = document.querySelector('.loading');
const loading__porcent = document.querySelector('.loading__porcent');

export function handleLoading( ) {

  const active = sessionStorage.getItem('load')
  
  if(!active) {

    loading__porcent.addEventListener('animationend',(e)=> {
      if(e.animationName) { 
    
         setTimeout(()=> {
          loading.style.opacity = 0;
    
         if(loading.style.opacity) {
            loading.style.display = 'none'
         }  
         },300)
    
      }
    })

    sessionStorage.setItem('load',true)
  } else {

    loading.style.display = 'none'
    
  }
}
