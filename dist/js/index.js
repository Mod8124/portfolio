(()=>{"use strict";const e=document.querySelector(".hambu"),t=document.querySelector(".containMobile"),i=document.querySelectorAll(".menuLink__link");function s(){e.classList.contains("active")?(e.classList.remove("active"),t.style.display="none"):(e.classList.add("active"),t.style.display="flex",setTimeout((()=>{t.classList.add("active")}),100))}const o=document.querySelector(".loading"),c=document.querySelector(".loading__porcent");function a(e,t){new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add(t)}))})).observe(document.querySelector(`.${e}`))}const n=document.querySelector(".accesibilty"),r=document.querySelector(".accesibility__modal"),l=[{img:"./assets/img/images/AnimeBlog.jpg",github:"https://github.com/Mod8124/blogAnime-node.git",url:"https://blog-anime-node.herokuapp.com"},{img:"./assets/img/images/rock.jpg",github:"https://github.com/Mod8124/Classic-Rock-paper-scissors.git",url:"https://classic-rock-paper-scissors.vercel.app"},{img:"./assets/img/images/clone-netflix.jpg",github:"https://github.com/Mod8124/Netflix-clone-with-next-js.git",url:"https://netflix-clone-mod8124.vercel.app"},{img:"./assets/img/images/ecommerce.jpg",github:"https://github.com/Mod8124/ecommerce-vue.git",url:"https://ecommerce-vue-seven.vercel.app"},{img:"./assets/img/images/jhonny.jpg",github:"https://github.com/Mod8124/jhonny_webSite.git",url:"https://mod8124.github.io/jhonny_webSite"},{img:"./assets/img/images/rest-country.jpg",github:"https://github.com/Mod8124/rest-countries-vue.git",url:"https://rest-countries-mv56ciqhj-mod8124.vercel.app"},{img:"./assets/img/images/sunnyside.jpg",github:"https://github.com/Mod8124/sunnyside.git",url:"https://mod8124.github.io/sunnyside"},{img:"./assets/img/images/bank.jpg",github:"https://github.com/Mod8124/Easybank.git",url:"https://mod8124.github.io/Easybank"},{img:"./assets/img/images/comment.jpg",github:"https://github.com/Mod8124/interartive-comments.git",url:"https://interartive-comments.vercel.app"},{img:"./assets/img/images/ajedrez.jpg",github:"https://github.com/Mod8124/ChessWebsite.git",url:"https://chess-website.vercel.app"},{img:"./assets/img/images/food.jpg",github:"https://github.com/Mod8124/Food_webSite.git",url:"https://food-web-site.vercel.app"},{img:"./assets/img/images/web-dakMode.jpg",github:"https://github.com/Mod8124/landing-page-dark.git",url:"https://mod8124.github.io/landing-page-dark"}],g=document.querySelector(".modalImg"),m=document.querySelectorAll(".work__imgContainer"),d=document.querySelector(".modalImg__img"),u=document.querySelector(".modalImg__linkSvg"),p=document.querySelector(".modalImg__linkLink"),h=document.querySelector(".accesibilty"),y=document.querySelector('[data-color="--water_green"]'),b=document.querySelector('[data-color="--orange"]'),v=document.querySelector(".colorSelect__main"),_=document.querySelector(".colorSelect__secondary"),f=document.querySelector(".accesibility__modal"),S=document.querySelector(":root");function L(e){S.style.setProperty(`${e.target.dataset.color}`,"--water_green"===e.target.dataset.color?"#00ffff":"#ff8e31"),"--water_green"===e.target.dataset.color?v.value="#00ffff":_.value="#ff8e31"}function k(e){S.style.setProperty(`${e.target.dataset.key}`,`${e.target.value}`)}window.addEventListener("load",(function(){sessionStorage.getItem("load")?o.style.display="none":(c.addEventListener("animationend",(e=>{e.animationName&&setTimeout((()=>{o.style.opacity=0,o.style.opacity&&(o.style.display="none")}),300)})),sessionStorage.setItem("load",!0))})),window.addEventListener("scroll",(()=>{window.scrollY>60?n.style.display="flex":(n.style.display="none",r.classList.contains("active")&&(r.classList.remove("active"),n.style.right="0px",n.querySelector(".accesibility__img").src="./img/images/icon-acebi.svg"))})),g.addEventListener("click",(function(e){(e.target.classList.contains("modalImg__github")||e.target.classList.contains("modalImg__imgContainer"))&&(g.style.display="none")})),m.forEach(((e,t)=>{e.addEventListener("click",(()=>function(e){g.style.display="block",d.src=`${l[e].img}`,u.href=`${l[e].github}`,p.textContent=`${l[e].github}`,p.href=`${l[e].url}`}(t)))})),v.addEventListener("input",k),_.addEventListener("input",k),h.addEventListener("click",(function(e){e.target.classList.contains("accesibility__img")&&(f.classList.toggle("active"),h.style.right=`${f.clientWidth}px`,f.classList.contains("active")?h.querySelector(".accesibility__img").src="./assets/img/images/icon-close.svg":(h.querySelector(".accesibility__img").src="./assets/img/images/icon-acebi.svg",h.style.right="0px"))})),y.addEventListener("click",L),b.addEventListener("click",L),e.addEventListener("click",s),i.forEach((e=>{e.addEventListener("click",s)})),a("javaScript","rotate-animation"),a("react","rotate-animation")})();