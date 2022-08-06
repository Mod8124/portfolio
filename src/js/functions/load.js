const loading = document.querySelector('.loading');

export function handleLoading( ) {

  const active = sessionStorage.getItem('load')
  
  if(!active) {
    sessionStorage.setItem('load',true);
  } else {
    loading.style.display = 'none';
    loading.style.animationPlayState = 'paused';   
  }
}
