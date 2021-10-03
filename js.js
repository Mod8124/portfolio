var observer = new IntersectionObserver(entries => {
  
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add('react-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.react'));

  var observer = new IntersectionObserver(entries => {
   
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add('css-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.css'));

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
      if (entry.isIntersecting) {
        entry.target.classList.add('ps-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.ps'));

  document.getElementById("denisEmail").setAttribute('onclick', 'location.href = "mailto: denisenriquebaca@gmail.com"');
  document.getElementById("denisNumber").setAttribute('onclick', 'location.href = "https://wa.me/+50661208412"');
  document.getElementById("denisGithub").setAttribute('onclick', 'location.href = "https://github.com/Mod8124"');
  document.getElementById("denisInsta").setAttribute('onclick', 'location.href = "https://www.instagram.com/denismunoz151/"');

  const light = document.getElementsByClassName('light');
  const redSocial = document.getElementsByClassName('redSocial');

  for(let i = 0; i< redSocial.length; i++) {
    
  redSocial[i].addEventListener('mouseover', ()=> {
    light[i].style.background = '#fff';
  });

   redSocial[i].addEventListener('mouseleave', ()=> {
   light[i].style.background = '';
  });
 
}




