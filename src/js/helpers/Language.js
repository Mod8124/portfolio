/* eslint-disable quotes */
export const Language = () => {
    const EN = {
        nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
        hero: {
            hello: 'Hi,',
            im: "I'm",
            web: 'Web Developer & Web designer'
        },
        accesibilty: {
            main: {
                title: 'Main Color'
            },
            secondary: {
                title: 'Secondary Color'
            },
            restart: 'Restart Color'
        },
        about: {
            title: 'About Me',
            para: [
                "I'm a self-taught Front end Developer who started as a Web Designer, based in Costa Rica. Currently, I don't work the IT industry. In my free time, I like to do code things like <strong class='about__focus'><</strong>freelance projects | personal projects | or just code<strong class='about__focus'>></strong>. I hope one day to work as a full-time front end developer.",
                'I like to challenge myself and improve my tech skills so, I\'m starting my journey as <span class="about__focus">software engineer student</span> in January also, I participated in the <a target="_blank" href="https://worldskills.org">WorldSkills</a> competition 2021.'
            ],
            link: 'Download Resume '
        },
        skills: {
            title: 'Technical Skills'
        },
        projects: {
            title: 'Projects',
            btn: 'Games'
        },
        contant: {
            title: 'Contact me',
            sub_title: "Wow, look who's here!",
            number: 'Phone Number'
        },
        footer: {
            links: ['Projects', 'About', 'Contact'],
            others: ['Term', 'Privacy'],
            repo: ' Designed & built by <strong>Denis Muñoz</strong>'
        }
    };

    const ES = {
        nav: ['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'],
        hero: {
            hello: 'Hola,',
            im: 'Soy',
            web: 'Desarrollador Front End & Diseñador Web'
        },
        accesibilty: {
            main: {
                title: 'Color Primario'
            },
            secondary: {
                title: 'Color Secondario'
            },
            restart: 'Restaurar color'
        },
        about: {
            title: 'Sobre mí',
            para: [
                "Soy un desarrollador front end autodidacta que comenzó como diseñador web, ubicado en Costa Rica. Actualmente, no trabajo en la industria de IT. En mi tiempo libre, me gusta programar cosas como proyectos  <strong class='about__focus'><</strong>freelance | personales<strong class='about__focus'>></strong> o simplemente código. Espero algún día trabajar como desarrollador front-end a tiempo completo.",
                'Me gusta desafiarme a mí mismo y mejorar mis habilidades tecnológicas, así que estoy comenzando mi viaje como <span class="about__focus">estudiante de ingeniería de software</span> en Enero y también participé en la competencia <a target="_blank" href="https://worldskills.org">WorldSkills</a> 2021.'
            ],
            link: 'Descargar Curriculum'
        },
        skills: {
            title: 'Habilidades técnicas'
        },
        projects: {
            title: 'Proyectos',
            btn: 'Juegos'
        },
        contant: {
            title: 'Contáctame',
            sub_title: 'Wow, Mira quién esta aqui!',
            number: 'Número'
        },
        footer: {
            links: ['Proyectos', 'Sobre mí', 'Contacto'],
            others: ['Términos', 'Privacidad'],
            repo: ' Diseñado y construido por <strong>Denis Muñoz</strong>'
        }
    };

    return {
        EN,
        ES
    };
};
