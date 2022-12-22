export const Language = () => {
  const EN = {
    nav: ['Work', 'About', 'Contact'],
    hero: {
      hello: 'Hello!',
      im: "I'm",
      web: 'Front End Developer & Web designer',
      link: 'See More',
    },
    about: {
      title: 'About Me',
      para: [
        "I'm a self-taught Front End Developer who started as a Web Designer, based in Costa Rica. I have a passion for learning about innovative technologies, animations, best practices, and clean code.",
        'I like to challenge myself and improve my tech skills so recently, I started my journey learning Full-Stack development in Oracle Next Education, also, I participated in the <a target="_blank" href="https://worldskills.org">WorldSkills</a> competition 2021.',
      ],
      link: 'Download Resume ',
    },
    skills: {
      title: 'Technical Skills',
    },
    projects: {
      title: 'Projects',
    },
    contant: {
      title: 'Contact me',
      sub_title: "Wow, look who's here!",
      number: 'Phone Number',
    },
    footer: {
      links: ['Projects', 'About', 'Contact'],
      others: ['Term', 'Privacy'],
    },
  };

  const ES = {
    nav: ['Proyectos', 'Sobre mí', 'Contacto'],
    hero: {
      hello: 'Hola!',
      im: 'Soy',
      web: 'Desarrollador Front End & Diseñador Web',
      link: 'Ver más',
    },
    about: {
      title: 'Sobre mí',
      para: [
        'Soy un Desarrollador Front End autodidacta que comenzó como Diseñador Web, ubicado en Costa Rica. Me apasiona aprender sobre tecnologías innovadoras, animaciones, mejores prácticas y código limpio.',
        'Me gusta desafiarme a mí mismo y mejorar mis habilidades. Recientemente, comencé mi viaje aprendiendo desarrollo Full-Stack en Oracle Next Education. Además, participé en la competencia <a href="https://worldskills.org/">WorldSkills</a> 2021.',
      ],
      link: 'Descargar Curriculum',
    },
    skills: {
      title: 'Habilidades técnicas',
    },
    projects: {
      title: 'Proyectos',
    },
    contant: {
      title: 'Contáctame',
      sub_title: 'Wow, Mira quién esta aqui!',
      number: 'Número',
    },
    footer: {
      links: ['Proyectos', 'Sobre mí', 'Contacto'],
      others: ['Términos', 'Privacidad'],
    },
  };

  return {
    EN,
    ES,
  };
};
