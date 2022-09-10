import { Language } from '../helpers/Language.js'
const { EN, ES } = Language();

export const languageBtns = document.querySelectorAll('.btn__language');

const menuLink__link = document.querySelectorAll('.menuLink__link');
const navBarLinks = document.querySelectorAll('.navBarLinks');

//hero section
const hello = document.querySelector('#hello');
const im = document.querySelector('#im');
const para = document.querySelector('.cta__para');
const link = document.querySelector('.cta__link');

//about 
const aboutTitle = document.querySelector('.about__title');
const aboutPara = document.querySelectorAll('.about__para');
const aboutBtn = document.querySelector('.btnDownload');
const btnDownload = document.querySelector('.mainButton');

//skils
const skillsTitle = document.querySelector('.skills__title');

//projects
const projectsTitle = document.querySelector('.title__title h2');

//contact
const contactTitle = document.querySelector('.tittleTwo__title h2');
const contactSubTitle = document.querySelector('.tittleTwo__title h3');
const number = document.querySelector('.textRedNumber');

//footer
const footerLinks = document.querySelectorAll('.footer__link');
const footerLinksTwo = document.querySelectorAll('.footer__link2');

// english button
const englishBtn = document.querySelector('.btn__language');

export const handleLanguage = (e) => {
    const {target} = e;
    if (target.classList.contains('btn__language--en')) {
        languageBtns[1].classList.remove('active');
        target.classList.add('active');  
    } else {
        languageBtns[0].classList.remove('active');
        target.classList.add('active');
    }
    language()
}

export const language = () => {

    if (englishBtn.classList.contains('active')) {
   
        menuLink__link.forEach((link, i)=> link.innerHTML = EN.nav[i]);
        navBarLinks.forEach((link, i) => link.innerHTML = EN.nav[i]);

        hello.innerHTML = EN.hero.hello;
         im.innerHTML = EN.hero.im;
         para.innerHTML = EN.hero.web;
        link.innerHTML = EN.hero.link;

        aboutTitle.innerHTML = EN.about['title'];
         aboutPara.forEach((para, index)=> para.innerHTML = EN.about['para'][index]);
         aboutBtn.textContent = EN.about['link'];
        btnDownload.href = './assets/img/resume_Denis_p.pdf';

        skillsTitle.innerHTML = EN.skills['title'];

        projectsTitle.innerHTML = EN.projects['title'];

        contactTitle.innerHTML = EN.contant['title'];
        contactSubTitle.innerHTML = EN.contant['sub_title'];
        number.innerHTML = EN.contant['number'];

        footerLinks.forEach((link, i) => link.innerHTML = EN.footer.links[i]);
        footerLinksTwo.forEach((link, i)=> link.innerHTML = EN.footer.others[i]);
        
    } else {

        menuLink__link.forEach((link, i)=> link.innerHTML = ES.nav[i]);
        navBarLinks.forEach((link, i) => link.innerHTML = ES.nav[i]);

        hello.innerHTML = ES.hero.hello;
         im.innerHTML = ES.hero.im;
         para.innerHTML = ES.hero.web;
        link.innerHTML = ES.hero.link;

        aboutTitle.innerHTML = ES.about['title'];
         aboutPara.forEach((para, index)=> para.innerHTML = ES.about['para'][index]);
         aboutBtn.textContent = ES.about['link'];
        btnDownload.href = './assets/img/resume_denisSP.pdf';

        skillsTitle.innerHTML = ES.skills['title'];

        projectsTitle.innerHTML = ES.projects['title'];

        contactTitle.innerHTML = ES.contant['title'];
        contactSubTitle.innerHTML = ES.contant['sub_title'];
        number.innerHTML = ES.contant['number'];

        footerLinks.forEach((link, i)=> link.innerHTML = ES.footer.links[i]);
        footerLinksTwo.forEach((link, i)=> link.innerHTML = ES.footer.others[i]);
    }
};
