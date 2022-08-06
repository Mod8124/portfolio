export const Language = () => {
    const EN = {
       nav:['Work','About','Contact'],
       hero:{
         hello:'Hello!',
         im:'I\'m',
         web:'Web developer & Web designer',
         link:'See More'
       },
       about:{
         title:'About Me',
         para:['I’m a web developer and web designer with strong knowledge in front end technologies, based in San Jose, Costa Rica, I have an interest in learning a lot, about innovate technologies, UI effects, and animations.',
              'A Well-committed person with attention to detail, who loves to challenge me every day with new problems, also I participated in the WorldSkills competition 2021.'],
         link:'Download Resume '
       },
       skills:{
         title:'Technical Skills'
       },
       projects:{
         title:'Projects'
       },
       contant:{
         title:'Contact me',
         sub_title:'Wow, look who\'s here!',
         number:'Phone Number'
       },
       footer:{
         links:['Projects', 'About', 'Contact'],
         others:['Term', 'Privacy']
       }
    }

    const ES = {
        nav:['Proyectos','Sobre mí','Contacto'],
        hero:{
            hello:'Hola!',
            im:"Soy",
            web:'Desarrollador Web & Diseñador Web',
            link:'Ver más'
        },
        about:{
            title:'Sobre mí',
            para:['Soy un Desarrollador Web y Diseñador Web, con fuertes conocimientos en tecnologías front end, ubicado en San José, Costa Rica, tengo una gran pasión por aprender mucho sobre nuevas tecnologías, efectos ui y animaciones.','Una persona muy comprometida con atención a los detalles, que ama retarse a sí mismo todos los días con nuevos problemas, también participe en la competencia WorldSkills 2021.'],
            link:'Descargar Curriculum'
        },
        skills:{
            title:'Habilidades técnicas'
        },
        projects:{
            title:'Proyectos'
        },
        contant:{
            title:'Contáctame',
            sub_title:'Wow, Mira quién esta aqui!',
            number:'Número'
        },
        footer:{
          links:['Proyectos', 'Sobre mí', 'Contacto'],
          others:['Términos', 'Privacidad']
        }
    }

    return {
      EN,
      ES
    };
};