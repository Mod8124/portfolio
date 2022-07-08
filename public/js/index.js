(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var o=i.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=document.querySelector(".hambu"),i=document.querySelector(".containMobile"),o=document.querySelectorAll(".menuLink__link");function c(){t.classList.contains("active")?(t.classList.remove("active"),i.style.display="none"):(t.classList.add("active"),i.style.display="flex",setTimeout((()=>{i.classList.add("active")}),100))}function r(e,t){new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add(t)}))})).observe(document.querySelector(`.${e}`))}const s=document.querySelector(".loading"),n=document.querySelector(".loading__porcent"),a=document.querySelector(".accesibilty"),l=document.querySelector(".accesibility__modal"),u=e.p+"animeBlog.jpg",g=e.p+"rock.jpg",d=e.p+"clone-netflix.jpg",m=e.p+"ecommerce.jpg",p=e.p+"jhonny.jpg",h=e.p+"rest-country.jpg",y=e.p+"sunnyside.jpg",b=e.p+"bank.jpg",v=e.p+"comment.jpg",_=e.p+"ajedrez.jpg",f=e.p+"food.jpg",S=e.p+"web-dakMode.jpg",q=e.p+"test.svg",w=e.p+"icon-acebi.svg",L=e.p+"icon-close.svg",k=e.p+"icon-restart.svg",E=[u,g,d,m,p,h,y,b,v,_,f,S],j=q,M=[{img:E[0],github:"https://github.com/Mod8124/blogAnime-node.git",url:"https://blog-anime-node.herokuapp.com"},{img:E[1],github:"https://github.com/Mod8124/Classic-Rock-paper-scissors.git",url:"https://classic-rock-paper-scissors.vercel.app"},{img:E[2],github:"https://github.com/Mod8124/Netflix-clone-with-next-js.git",url:"https://netflix-clone-mod8124.vercel.app"},{img:E[3],github:"https://github.com/Mod8124/ecommerce-vue.git",url:"https://ecommerce-vue-seven.vercel.app"},{img:E[4],github:"https://github.com/Mod8124/jhonny_webSite.git",url:"https://mod8124.github.io/jhonny_webSite"},{img:E[5],github:"https://github.com/Mod8124/rest-countries-vue.git",url:"https://rest-countries-mv56ciqhj-mod8124.vercel.app"},{img:E[6],github:"https://github.com/Mod8124/sunnyside.git",url:"https://mod8124.github.io/sunnyside"},{img:E[7],github:"https://github.com/Mod8124/Easybank.git",url:"https://mod8124.github.io/Easybank"},{img:E[8],github:"https://github.com/Mod8124/interartive-comments.git",url:"https://interartive-comments.vercel.app"},{img:E[9],github:"https://github.com/Mod8124/ChessWebsite.git",url:"https://chess-website.vercel.app"},{img:E[10],github:"https://github.com/Mod8124/Food_webSite.git",url:"https://food-web-site.vercel.app"},{img:E[11],github:"https://github.com/Mod8124/landing-page-dark.git",url:"https://mod8124.github.io/landing-page-dark"}],$=document.querySelector(".modalImg"),I=document.querySelectorAll(".work__imgContainer"),x=document.querySelector(".modalImg__img"),A=document.querySelector(".modalImg__linkSvg"),C=document.querySelector(".modalImg__linkLink"),T=document.querySelector(".accesibilty"),B=document.querySelector('[data-color="--water_green"]'),N=document.querySelector('[data-color="--orange"]'),P=document.querySelector(".colorSelect__main"),F=document.querySelector(".colorSelect__secondary"),W=document.querySelector(".accesibility__modal"),z=document.querySelector(":root");function D(e){z.style.setProperty(`${e.target.dataset.color}`,"--water_green"===e.target.dataset.color?"#00ffff":"#ff8e31"),"--water_green"===e.target.dataset.color?P.value="#00ffff":F.value="#ff8e31"}function O(e){z.style.setProperty(`${e.target.dataset.key}`,`${e.target.value}`)}const R=e.p+"resume_Denis_p.pdf",Y=document.querySelectorAll(".work_img"),G=document.querySelector(".accesibility__img"),H=document.querySelectorAll(".logo__logoImg"),J=document.querySelectorAll(".colorSelect__img"),K=document.querySelector(".mainButton");window.addEventListener("load",(()=>{Y.forEach(((e,t)=>{e.src=E[t]})),H.forEach((e=>e.src=j)),J.forEach((e=>e.src=k)),G.src=w,K.href=R})),window.addEventListener("load",(function(){sessionStorage.getItem("load")?s.style.display="none":(n.addEventListener("animationend",(e=>{e.animationName&&setTimeout((()=>{s.style.opacity=0,s.style.opacity&&(s.style.display="none")}),300)})),sessionStorage.setItem("load",!0))})),window.addEventListener("scroll",(()=>{window.scrollY>60?a.style.display="flex":(a.style.display="none",l.classList.contains("active")&&(l.classList.remove("active"),a.style.right="0px",a.querySelector(".accesibility__img").src="./img/images/icon-acebi.svg"))})),$.addEventListener("click",(function(e){(e.target.classList.contains("modalImg__github")||e.target.classList.contains("modalImg__imgContainer"))&&($.style.display="none")})),I.forEach(((e,t)=>{e.addEventListener("click",(()=>function(e){$.style.display="block",x.src=`${M[e].img}`,A.href=`${M[e].github}`,C.textContent=`${M[e].github}`,C.href=`${M[e].url}`}(t)))})),P.addEventListener("input",O),F.addEventListener("input",O),T.addEventListener("click",(function(e){e.target.classList.contains("accesibility__img")&&(W.classList.toggle("active"),T.style.right=`${W.clientWidth}px`,W.classList.contains("active")?T.querySelector(".accesibility__img").src=L:(T.querySelector(".accesibility__img").src=w,T.style.right="0px"))})),B.addEventListener("click",D),N.addEventListener("click",D),t.addEventListener("click",c),o.forEach((e=>{e.addEventListener("click",c)})),r("javaScript","rotate-animation"),r("react","rotate-animation")})();