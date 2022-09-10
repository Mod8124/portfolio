const imgLinks =  [
    {
      img:'./assets/img/images/AnimeBlog.jpg',
      github:'https://github.com/Mod8124/blogAnime-node.git',
      url:'https://blog-anime-node.herokuapp.com',
      icons:['Nodejs','MongoDB', 'Webpack'],
      title:'Blog-App',
      info:{
        EN:'Developed and designed a blog app with authenticating, utilizing NodeJs by storing all the data on MongoDB, And the client-side ejs, while implementing MVC. Improved user experience during app by using things like dark mode to improve the usability.',
        ES:'Desarrolle y Diseñe un blog app con autenticación, utilizando NodeJs, almacenando todos los datos en MongoDB, y en lado del cliente el template Ejs mientras implemento MVC. Mejorando la ux durante la app, usando modo oscuro para la accesibilidad.'
      }
    },
    {
      img:'./assets/img/images/rock.jpg',
      github:'https://github.com/Mod8124/Classic-Rock-paper-scissors.git',
      url:'https://classic-rock-paper-scissors.vercel.app',
      icons:['NextJs','MongoDB','Styled-components','React-testing-library'],
      title:'Rock-Paper-Scissors Game',
      info:{
        EN:'Created a classic game App to enable users to play rock-paper-scissors or rock-lizard-Spock in NextJS, and save names for records by saving them in MongoDB. Implemented good practices, state management with redux, and test the code with unit testing.',
        ES:'Cree una aplicación de juego clásico para permitir al usuario jugar piedra-papel-tijeras o piedra-lagarto-Spock en NextJS, y guarde los nombres para clasificación, guardándolos en MongoDB. Implementado buenas prácticas, gestiónde estados con redux, y testeé el código con unit-test.'
      }
    },
    {
      img:'./assets/img/images/moon.jpg',
      github:'https://github.com/Mod8124/space-tourism-nextjs-typescript.git',
      url:'https://space-tourism-nextjs-typescript.vercel.app',
      icons:['NextJs','TypeScript','RTK Query','Styled-Components'],
      title:'Space-tourism',
      info:{
        EN:'Developed a Space tourism multi-page website(spa) based on NextJs + TypeScript, Framer-Motion, and Styled-Components. Implemented Eslint for formatting the code, preventing bugs by using Unit Test (React-Testing-Library) in NextJs, and Sending all the data necessary by NodeJs + TypeScript.',
        ES:'Desarrollé un sitio web (spa) de varias páginas de turismo espacial basado en NextJs + TypeScript, Framer-Motion, y Styled-Components. Se implementó Eslint para formatear el código, evitar errores mediante el uso de Unit Test (React-Testing-Library) en NextJs y enviar todos los datos necesarios mediante NodeJs + TypeScript.'
      }
    },
    {
      img:'./assets/img/images/ecommerce.jpg',
      github:'https://github.com/Mod8124/ecommerce-vue.git',
      url:'https://ecommerce-vue-seven.vercel.app',
      icons:['Vue','Vuex','Vue-Router','Sass'],
      title:'Shoes E-commerce',
      info:{
        EN:'Developed an e-commerceapp ,and built API for providing all the products, utilizing NodeJs on the server-side, and the client-side with Vue via an API. Implemented design features, state management, router, and CSS methodology like BEM in SASS.',
        ES:'Desarrolle un e-commerce app, y construí una API para proveer todos los productos, utilizando NodeJs en el lado del servidor, y en el lado del cliente con Vue através de una API. implementado principio de diseño, gestión de estados(vuex), rutas, y aplicando metodologías de CSS como Bem en Sass.'
      }
    },
    
    {
      img:'./assets/img/images/jhonny.jpg',
      github:'https://github.com/Mod8124/jhonny_webSite.git',
      url:'https://mod8124.github.io/jhonny_webSite',
      icons:['HTML','Css','JavaScript'],
      title:'Jhonny-WebSite',
      info:{
        EN:'Developed and Designed a four pages website for Jhonny Toval(Artis based on Costa Rica), based on HTML5, CSS3, and JavaScript to expand the jhonny\'s business while implemented the optimal layout depending on their device\'s screen size, and Mobile-First.',
        ES:'Desarrollé y diseñé cuatro páginas de sitios web para Jhonny Toval (Artista de Costa Rica), basadas en HTML5, CSS3 y JavaScript para expandir el negocio de jhonny mientras implementaba el diseño óptimo según el tamaño de pantalla de su dispositivo y Mobile -Primero.'
      }
    },
    {
      img:'./assets/img/images/rest-country.jpg',
      github:'https://github.com/Mod8124/rest-countries-vue.git',
      url:'https://rest-countries-mv56ciqhj-mod8124.vercel.app',
      icons:['Vue', 'Vue-Router', 'Sass'],
      title:'Rest-Country',
      info:{
        EN:'Developed a REST Countries API with a dark mode switcher, showing all necessary countries and seeing country details by Vue Router, consuming the API via Vue.js, and styling with Sass using the Single File Component pattern in Vue.js.',
        ES:'Desarrollé una API de países REST con un conmutador de modo oscuro, mostrando todos los países necesarios y viendo los detalles de los países por Vue Router, consumiendo la API a través de Vue.js y diseñando con Sass usando el patrón de componente de archivo único en Vue.js.'
      }
    },
    {
      img:'./assets/img/images/sunnyside.jpg',
      github:'https://github.com/Mod8124/sunnyside.git',
      url:'https://mod8124.github.io/sunnyside',
      icons:['HTML','CSS','JavaScript'],
      title:'SunnySide-WebSite',
      info:{
        EN:'Developed a Sunnyside website based on HTMl5, CSS3, and JavaScript. to Implement the optimal layout for the site depending on their device\'s screen size and See hover states for all interactive elements on the page.',
        ES:'Desarrollé un sitio web de Sunnyside basado en HTMl5, CSS3 y JavaScript. para implementar el diseño óptimo para el sitio según el tamaño de la pantalla de su dispositivo y ver los estados de desplazamiento para todos los elementos interactivos en la página.'
      }
    },
    {
      img:'./assets/img/images/clone-netflix.jpg',
      github:'https://github.com/Mod8124/Netflix-clone-with-next-js.git',
      url:'https://netflix-clone-mod8124.vercel.app',
      icons:['NextJs','NodeJs','Css-Modules'],
      title:'Netflix-Clone',
      info:{
        EN:'Developed a Netflix clone with select users based on NextJs, CSS Modules, and NodeJs by consuming the movie DB API to implement a Responsive layout to adapt to users\'s screens, and adding styles with CSS Modules.',
        ES:'Desarrollé un clon de Netflix con usuarios seleccionados basado en NextJs, Módulos CSS y NodeJs al consumir la API de base de datos de películas para implementar un diseño receptivo para adaptarse a las pantallas de los usuarios y agregar estilos con módulos CSS.'
      }
    },
  
    {
      img:'./assets/img/images/bank.jpg',
      github:'https://github.com/Mod8124/Easybank.git',
      url:'https://mod8124.github.io/Easybank',
      icons:["HTMl",'CSS'],
      title:'Bank-WebSite',
      info:{
        EN:'Developed a website about Next Generation Digital Banking by using HTML5, and CSS3 to Implement the optimal layout for the site depending on their device\'s screen size and See hover states for all interactive elements on the page, and Mobile-First.',
        ES:'Desarrollé un sitio web sobre la banca digital de próxima generación utilizando HTML5 y CSS3 para implementar el diseño óptimo para el sitio según el tamaño de la pantalla de su dispositivo y ver los estados de desplazamiento para todos los elementos interactivos en la página, y Mobile-First.'
      }
    },
    {
      img:'./assets/img/images/ajedrez.jpg',
      github:'https://github.com/Mod8124/ChessWebsite.git',
      url:'https://chess-website.vercel.app',
      icons:['HTML','CSS','JavaScript'],
      title:'Ajedrez-WebSite',
      info:{
        EN:'Developed and Designed a unique website about Ajedrez, based on HTML5, Css3, and JavaScript. to implement things like SlideShow(carousel), parallax-effect Css-flexbox, CSS-Grid, optimizing Images and logo, Mobile-first, and Responsive Design.',
        ES:'Desarrollé y diseñé un sitio web único sobre Ajedrez, basado en HTML5, Css3 y JavaScript. para implementar cosas como SlideShow (carrusel), efecto-paralax Css-flexbox, CSS-Grid, optimización de imágenes y logotipo, Mobile-first y Responsive Design.'
      }
    },
    {
      img:'./assets/img/images/food.jpg',
      github:'https://github.com/Mod8124/Food_webSite.git',
      url:'https://food-web-site.vercel.app',
      icons:['HTML','CSS',"JavaScript"],
      title:'Food-WebSite',
      info:{
        EN:'Developed and Designed a website specializing in desserts, based on HTML5, Css3, and JavaScript. to implement things like SlideShow(carousel), Css-flexbox, CSS-Grid, optimizing Images and logo, Mobile-first, and Responsive Design.',
        ES:'Desarrollé y Diseñé un sitio web especializado en postres, basado en HTML5, Css3 y JavaScript. para implementar cosas como SlideShow (carrusel), Css-flexbox, CSS-Grid, optimización de imágenes y logotipo, Mobile-first y Diseño Responsivo.'
      }
    },
    {
      img:'./assets/img/images/calculator.jpg',
      github:'https://github.com/Mod8124/Calculator-React-TypeScript.git',
      url:'https://calculator-react-type-script.vercel.app',
      icons:['React','TypeScript','Framer-Motion','Styled-Components'],
      title:'Calculator-App',
      info:{
        EN:'Developed the classic calculator with three different themes switches and animations, based on React + TypeScript, Framer-motion, Styled-Components. Implemented Unit-test(react-testing-library) and apply reset CSS with Normalize.css for making look good on all the browsers.',
        ES:'Desarrollé la calculadora clásica con tres interruptores de temas diferentes y animaciones, basada en React + TypeScript, Framer-motion, Styled-Componets. Se implementó Unit-test (react-testing-library) y se aplicó el reinicio de CSS con normalize.css para que se viera bien en todos los navegadores.'
      }
    },
]

export default imgLinks;