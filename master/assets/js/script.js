let projectsList = [
  { name: "Natours-Web", img: "natours-mockup.png", href: "Natours-Web/" },
  { name: "Nexter-Web", img: "nexter-mockup.png", href: "Nexter-Web/" },
  { name: "Xotelo-Web", img: "xotelo-mockup.png", href: "Xotelo-Web/" },
  {
    name: "Alexa's Portfolio-Web",
    img: "alexaportfolio-mockup.png",
    href: "BONUS/Alexa-Portfolio-Web",
  },
  {
    name: "Christmas-SPA-Web",
    img: "cspa-mockup.png",
    href: "BONUS/Christmas-SPA-Web",
  },
];

let technologiesUsed = [
  { name: "HTML", img: "html_icon.svg" },
  { name: "CSS", img: "css_icon.svg" },
  { name: "JS", img: "js_icon.svg" },
  { name: "Sass", img: "sass_icon.svg" },
];

let udemyCourseLink = 
  "https://www.udemy.com/course/advanced-css-and-sass/"
let githubRepoLink =
  "https://github.com/ladunjexa/Advanced-CSS-and-Sass-Course";

let buttonProps = {
  className:
    "bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white font-semibold py-1 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out",
  type: "button",
};

let techContainerClasses =
  "h-12 transform hover:scale-125 duration-300 ease-in-out";

let techContainer = document.querySelector(".technologies-container");
let portfolioList = document.querySelector(".portfolio-list");
let projectContainer = document.querySelector(".macbook-project-mockup");
let projectHref = document.querySelector(".project-href");
let projectHrefBtn = document.querySelector(".project-href-button");
let githubNavLink = document.querySelector(".github-button-link");
let udemyNavLink = document.querySelector(".udemy-button-link");

window.onload = function () {
  // Set github link
  githubNavLink.setAttribute("href", githubRepoLink);
  udemyNavLink.setAttribute("href", udemyCourseLink);

  // Set technologies
  technologiesUsed.forEach((tech) => {
    let img = document.createElement("img");

    img.className = techContainerClasses;
    img.src = `master/assets/media/${tech.img}`;
    img.alt = `${tech.name} icon`;

    techContainer.appendChild(img);
  });

  // Set projects
  projectsList.forEach((project, index) => {
    let button = document.createElement("button");

    button.id = `button-${project.name}-${index}`;
    button.className = buttonProps.className;
    button.type = buttonProps.type;
    button.textContent = `${project.name.slice(0, project.name.length - 4)}`;
    button.onclick = () => loadProject(project);

    portfolioList.appendChild(button);
  });

  // Load random initial project
  loadProject(projectsList[Math.floor(Math.random() * projectsList.length)]);
};

// Load project
const loadProject = (project) => {
  projectContainer.setAttribute(
    "src",
    `master/assets/media/projects/${project.img}`
  );
  projectHref.setAttribute(
    "href",
    `https://ladunjexa.github.io/Advanced-CSS-and-Sass-Course/${project.href}`
  );
  projectHrefBtn.innerHTML = `Go to ${project.name.replace("-", " ")}`;
};
