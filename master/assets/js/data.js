const MAIN_PATH = "master/assets";

export const CONFIG = {
  assets: {
    css: `${MAIN_PATH}/css/style.css`,
    js: `${MAIN_PATH}/js/script.js`,
    media: `${MAIN_PATH}/media`,
    projects: `${MAIN_PATH}/media/projects`,
    tech: `${MAIN_PATH}/media/tech`,
  },

  ghRepo: {
    name: "Advanced-CSS-and-Sass-Course",
    user: "ladunjexa",
  },
};

export const webData = {
  title: "ladunjexa —  Advanced CSS & Sass Course",

  navbar: {
    title: {
      heading1: null,
      span: "Advanced CSS & Sass Course",
      heading2: null,
    },
    githubLink: `https://github.com/${CONFIG.ghRepo.user}/${CONFIG.ghRepo.name}`,
    udemyLink: "https://www.udemy.com/course/advanced-css-and-sass/",
  },

  hero: {
    title: {
      heading1: "Advanced",
      span: "CSS and Sass",
      heading2: "Course: Flexbox, Grid, Animations and More!",
    },
    subtitle: {
      a: {
        text: "Udemy course",
        href: "https://www.udemy.com/course/advanced-css-and-sass/",
      },
      span: "by Jonas Schmedtmann.",
    },
  },

  dialog: {
    headline: "Projects + BONUS",
    buttonProps: {
      className:
        "bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white font-semibold py-1 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out",
      activeClassName:
        "from-indigo-800 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 focus:ring-indigo-500",
      type: "button",
    },
  },

  techstack: {
    divProps: {
      className: "h-12 transform hover:scale-125 duration-300 ease-in-out",
    },
  },
};

export const technologiesData = [
  { name: "HTML", img: "html_icon.svg" },
  { name: "CSS", img: "css_icon.svg" },
  { name: "JS", img: "js_icon.svg" },
  { name: "Sass", img: "sass_icon.svg" },
];

export const projectsData = [
  { name: "Natours-Web", imgLink: "natours-mockup.png" },
  { name: "Nexter-Web", imgLink: "nexter-mockup.png" },
  { name: "Xotelo-Web", imgLink: "xotelo-mockup.png" },
  {
    name: "Alexa-Portfolio-Web",
    imgLink: "alexaportfolio-mockup.png",
    href: `BONUS/Alexa-Portfolio-Web`,
  },
  {
    name: "Christmas-SPA-Web",
    imgLink: "cspa-mockup.png",
    href: "BONUS/Christmas-SPA-Web",
  },
];
