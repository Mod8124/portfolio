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


