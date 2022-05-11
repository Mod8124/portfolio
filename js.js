const hambu = document.querySelector('.hambu')
const containerMobile = document.querySelector('.containMobile');

hambu.addEventListener('click',() => {
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
})

function objectEntry (object, animation) {
  var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add(animation)
        }
      })
  })

  observer.observe(document.querySelector(`.${object}`))
}

objectEntry('react','react-animation')
objectEntry('css','css-animation')
objectEntry('ps','ps-animation')

document.getElementById("denisEmail").setAttribute('onclick', 'location.href = "mailto:denisenriquebaca@gmail.com"');
document.getElementById("denisNumber").setAttribute('onclick', 'location.href = "https://wa.me/+50661208412"');
document.getElementById("denisGithub").setAttribute('onclick', 'location.href = "https://github.com/Mod8124"');
document.getElementById("denisInsta").setAttribute('onclick', 'location.href = "https://www.instagram.com/denismunoz151/"');










