import { webData, technologiesData, projectsData, CONFIG } from "./data.js";

/**
 * Determines whether the initial project should be randomly selected or the first one on the list.
 *
 * @type {boolean}
 */
const RANDOM_INITIAL_PROJECT = true;

/**
 * The maximum number of projects to be displayed.
 *
 * @type {number}
 */
const MAX_DISPLAYED_PROJECTS =
  projectsData.length < 10 ? projectsData.length : 10;

/**
 * The number of projects currently displayed.
 *
 * @type {number}
 */
let displayedProjects = MAX_DISPLAYED_PROJECTS;

/**
 * The DOM elements used in the page.
 *
 * @type {object}
 */
let DOM = {
  navbarTitle: document.querySelector(".navbar-title"),
  udemyButton: document.querySelector(".udemy-button-link"),
  githubButton: document.querySelector(".github-button-link"),

  heroTitle: document.querySelector(".hero-h1"),
  heroSubtitle: {
    a: document.querySelector(".hero-p a"),
    span: document.querySelector(".hero-p span"),
  },

  dialogTitle: document.querySelector(".dialog-title"),
  dialogList: document.querySelector(".dialog-list"),
  gotoProjectLink: document.querySelector(".goto-project"),
  gotoProjectButton: document.querySelector(".goto-project button"),
  viewMoreButton: document.querySelector(".view-more-button"),
  viewLessButton: document.querySelector(".view-less-button"),

  macbookProjectMockup: document.querySelector(".macbook-project-modal"),
  macbookProjectLink: document.querySelector(".macbook-project-link"),

  technologies: document.querySelector(".technologies-section"),
};

/**
 * Set up the initial state of the page when it is loaded.
 *
 * @returns {void}
 */
window.onload = function () {
  // Destructure webData object
  const { title, navbar, hero, dialog, techstack } = webData;

  // Set document title
  document.title = title;

  // Set navbar links
  DOM.githubButton.setAttribute("href", navbar.githubLink);
  if (navbar.udemyLink) {
    DOM.udemyButton.setAttribute("href", navbar.udemyLink);
  } else {
    DOM.udemyButton.style.display = "none";
  }
  DOM.navbarTitle.innerHTML = `${navbar.title.heading1 ?? ""} <span
  class="navbar-title bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
    ${navbar.title.span}</span>
  ${navbar.title.heading2 ?? ""}`;

  // Set hero
  DOM.heroTitle.innerHTML = `${hero.title.heading1 ?? ""} <span
  class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
    ${hero.title.span ?? ""}</span>
  ${hero.title.heading2 ?? ""}`;

  DOM.heroSubtitle.a.textContent = hero.subtitle.a.text;
  DOM.heroSubtitle.a.setAttribute("href", hero.subtitle.a.href);
  DOM.heroSubtitle.span.textContent = hero.subtitle.span;

  // Set dialog
  DOM.dialogTitle.textContent = dialog.headline;

  // Set technologies
  technologiesData.forEach((technology) => {
    let img = document.createElement("img");

    img.className = techstack.divProps.className;
    img.src = `${CONFIG.assets.tech}/${technology.img}`;
    img.alt = `${technology.name} icon`;

    DOM.technologies.appendChild(img);
  });

  // Set projects
  projectsData
    .slice(0, displayedProjects)
    .forEach((project, index) =>
      DOM.dialogList.appendChild(createProjectButton(project, index))
    );

  // Disable view less button
  DOM.viewLessButton.disabled = true;
  DOM.viewLessButton.classList.add("opacity-50");

  // Disable view more button if all projects have been displayed
  if (MAX_DISPLAYED_PROJECTS >= projectsData.length) {
    DOM.viewMoreButton.disabled = true;
    DOM.viewMoreButton.classList.add("opacity-50");
  }

  // Load random initial project
  const initalProjectID = RANDOM_INITIAL_PROJECT
    ? Math.floor(Math.random() * displayedProjects)
    : 0;
  const initialProject = projectsData[initalProjectID];

  handleClickProjectButton(initialProject, initalProjectID);
};

/**
 * Event handler for the "View Less" button click event.
 * Decreases the number of displayed projects and updates the project list accordingly.
 * Disables the button if the number of displayed projects is less than or equal to {MAX_DISPLAYED_PROJECTS}.
 *
 * @returns {void}
 */
DOM.viewLessButton.onclick = () => {
  if (displayedProjects <= MAX_DISPLAYED_PROJECTS) return;

  // Clear the project list
  DOM.dialogList.innerHTML = "";

  // Update the project list with the previous set of projects
  projectsData
    .slice(0, displayedProjects - MAX_DISPLAYED_PROJECTS)
    .forEach((project, index) =>
      DOM.dialogList.appendChild(createProjectButton(project, index))
    );

  // Decrease the number of displayed projects
  displayedProjects -= MAX_DISPLAYED_PROJECTS;

  // Disable the button and apply opacity class if the number of displayed projects is less than or equal to {MAX_DISPLAYED_PROJECTS}
  if (displayedProjects <= MAX_DISPLAYED_PROJECTS) {
    DOM.viewLessButton.disabled = true;
    DOM.viewLessButton.classList.add("opacity-50");
  }

  // Enable the "View More" button and remove opacity class if the number of displayed projects is greater than {MAX_DISPLAYED_PROJECTS}
  if (displayedProjects < projectsData.length) {
    DOM.viewMoreButton.disabled = false;
    DOM.viewMoreButton.classList.remove("opacity-50");
  }
};

/**
 * Event handler for the "View More" button click event.
 * Increases the number of displayed projects and updates the project list accordingly.
 * Disables the button and removes the content if all projects have been displayed.
 * Enables the "View Less" button if the number of displayed projects is greater than {MAX_DISPLAYED_PROJECTS}.
 *
 * @returns {void}
 */
DOM.viewMoreButton.onclick = () => {
  if (displayedProjects < projectsData.length) {
    // Update the project list with the next set of projects
    projectsData
      .slice(displayedProjects, displayedProjects + MAX_DISPLAYED_PROJECTS)
      .forEach((project, index) =>
        DOM.dialogList.appendChild(createProjectButton(project, index))
      );

    // Increase the number of displayed projects
    displayedProjects += MAX_DISPLAYED_PROJECTS;
  }

  if (displayedProjects === projectsData.length) {
    // Disable the button and apply opacity class if all projects have been displayed
    DOM.viewMoreButton.disabled = true;
    DOM.viewMoreButton.classList.add("opacity-50");
  }

  // Enable the "View Less" button and remove opacity class if the number of displayed projects is greater than {MAX_DISPLAYED_PROJECTS}
  if (displayedProjects > MAX_DISPLAYED_PROJECTS) {
    DOM.viewLessButton.disabled = false;
    DOM.viewLessButton.classList.remove("opacity-50");
  }
};

/**
 * Creates a project button element and attaches event handler for click event.
 * @param {Object} project - The project object containing project details.
 * @param {number} index - The index of the project.
 * @returns {HTMLButtonElement} - The created project button element.
 */
const createProjectButton = (project, index) => {
  let button = document.createElement("button");

  const { className, type } = webData.dialog.buttonProps;

  button.id = `button-${project.name}-${project.number ?? index}`;
  button.className = `project-button ${className}`;
  button.type = type;
  button.textContent = `${formatProjectName(project.name)}`;
  button.onclick = () => handleClickProjectButton(project, index);

  console.log(button.id);
  return button;
};

/**
 * Handles the click event of a project button.
 * Updates the active project button, project mockup image source, dialog button href, and preview image href.
 *
 * @param {Object} project - The project object containing project details.
 * @param {number} index - The index of the project.
 * @returns {void}
 */
const handleClickProjectButton = (project, index) => {
  const { className, activeClassName } = webData.dialog.buttonProps;

  let projectButtons = document.querySelectorAll(".project-button");
  let projectLiveUrl = `${
    project.liveUrl ??
    `https://${CONFIG.ghRepo.user}.github.io/${CONFIG.ghRepo.name}/${
      project.href ?? formatProjectName(project.name, true)
    }`
  }`;
  projectButtons.forEach(
    (button) => (button.className = `project-button ${className}`)
  );

  document.getElementById(
    `button-${project.name}-${project.number ?? index}`
  ).className = `project-button ${className} ${activeClassName}`;

  DOM.macbookProjectMockup.setAttribute(
    "src",
    `${CONFIG.assets.projects}/${project.imgLink}`
  );
  DOM.gotoProjectLink.setAttribute("href", projectLiveUrl);
  DOM.gotoProjectButton.textContent = `Go to ${formatProjectName(
    project.name
  )}`;

  DOM.macbookProjectLink.setAttribute("href", projectLiveUrl);
};

/**
 * Formats the project name based on the specified options.
 *
 * @param {string} name - The project name to format.
 * @param {boolean} isLink - Optional. Indicates whether the formatted name should be used as a link. Default is false.
 * @returns {string} - The formatted project name.
 * @api public
 */
const formatProjectName = (name, isLink = false) =>
  isLink
    ? name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-")
    : name
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
