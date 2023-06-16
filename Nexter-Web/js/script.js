(function () {
  // Toggle navigation
  const triggers = document.getElementsByClassName("js-toggle-nav");
  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", function () {
      document
        .getElementsByClassName("navigation__container")[0]
        .classList.toggle("navigation__container--active");
    });
  }

  // Dynamic Gallery Section
  let gallerySection = document.querySelector(".gallery");
  for (var i = 1; i <= 14; i++) {
    let figure = document.createElement("figure");
    figure.className = `gallery__item gallery__item--${i}`;
    let figureInnerHTML = `<img src="img/gal-${i}.jpeg" alt="Gallery image ${i}" class="gallery__img" />`;
    figure.innerHTML = figureInnerHTML;
    gallerySection.append(figure);
  }

  // Dynamic Footer Section
  let footerNavigation = document.querySelector(".nav");
  const liItems = [
    "Find you dream home",
    "Request proposal",
    "Download home planner",
    "Contact Us",
    "Submit your property",
    "Come work with us",
  ];

  let nodes = liItems.map((item) => {
    let li = document.createElement("li");
    li.className = "nav__item";
    let liInnerHTML = `<a href="javascript:void(0)" class="nav__link">${item}</a>`;
    li.innerHTML = liInnerHTML;
    return li;
  });

  footerNavigation.append(...nodes);

  // Dynamic Real estate Section
  const homeSection = document.querySelector(".homes");
  const realestates = [
    {
      id: "1",
      name: "Beautiful Family House",
      loc: "USA",
      rooms: "5",
      area: "325",
      price: "$1,200,000",
    },
    {
      id: "2",
      name: "Modern Glass Villa",
      loc: "Canada",
      rooms: "6",
      area: "450",
      price: "$2,750,000",
    },
    {
      id: "3",
      name: "Cozy Country House",
      loc: "UK",
      rooms: "4",
      area: "250",
      price: "$850,000",
    },
    {
      id: "4",
      name: "Large Rustical Villa",
      loc: "Portugal",
      rooms: "6",
      area: "480",
      price: "$1,950,000",
    },
    {
      id: "5",
      name: "Majestic Palace House",
      loc: "Germany",
      rooms: "18",
      area: "4230",
      price: "$9,500,000",
    },
    {
      id: "6",
      name: "Modern Family Apartment",
      loc: "Italy",
      rooms: "3",
      area: "180",
      price: "$600,000",
    },
  ];

  let homeNodes = realestates.map((item) => {
    let home = document.createElement("div");
    home.className = "home";
    let homeInnerHTML = `
    <img src="img/house-${item.id}.jpeg" alt="House 1" class="home__img" />
    <svg class="home__like">
      <use xlink:href="img/sprite.svg#icon-heart-full"></use>
    </svg>
    <h5 class="home__name">${item.name}</h5>
    <div class="home__location">
      <svg>
        <use xlink:href="img/sprite.svg#icon-map-pin"></use>
      </svg>
      <p>${item.loc}</p>
    </div>
    <div class="home__rooms">
      <svg>
        <use xlink:href="img/sprite.svg#icon-profile-male"></use>
      </svg>
      <p>${item.rooms} rooms</p>
    </div>
    <div class="home__area">
      <svg>
        <use xlink:href="img/sprite.svg#icon-expand"></use>
      </svg>
      <p>${item.area} m<sup>2</sup></p>
    </div>
    <div class="home__price">
      <svg>
        <use xlink:href="img/sprite.svg#icon-key"></use>
      </svg>
      <p>${item.price}</p>
    </div>
    <button class="btn home__btn">Contact realtor</button>`;
    home.innerHTML = homeInnerHTML;
    return home;
  });

  homeSection.append(...homeNodes);
})();
