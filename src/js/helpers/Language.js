/* eslint-disable quotes */
export const Language = () => {
    const EN = {
        nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
        hero: {
            hello: 'Hi,',
            im: "I'm",
            web: 'Software Developer & Web designer'
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
                'As software engineering student who has been coding for around 3 years, even before starting college. I began as a web designer, then transitioned to front-end development, and later decided to formally study engineering. I\'ve participated in several hackathons and open-source projects, such as <a target="_blank" href="https://worldskills.org">WorldSkills</a> in 2021.',
                'I am actively seeking a company to launch my career in the software engineering world, where I can demonstrate my skills. I am genuinely passionate about the idea and enjoy every aspect of creating new things from scratch.'
            ],
            link: 'Download Resume'
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
            web: 'Desarrollador de software & Diseñador Web'
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
                'Como estudiante de ingeniería de software que ha estado programando durante aproximadamente 3 años, incluso antes de comenzar la universidad. Comencé como diseñador web, luego hice la transición al desarrollo front-end y posteriormente decidí estudiar formalmente ingeniería. He participado en varios hackatones y proyectos de código abierto, como por ejemplo en <a target="_blank" href="https://worldskills.org">WorldSkills</a> en 2021.',
                'Estoy buscando activamente una empresa para iniciar mi carrera en el mundo de la ingeniería de software, donde pueda demostrar mis habilidades. Me apasiona sinceramente la idea y disfruto de cada aspecto de crear cosas nuevas desde cero.'
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
