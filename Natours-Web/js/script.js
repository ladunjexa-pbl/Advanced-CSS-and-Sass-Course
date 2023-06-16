(function () {
  let compositionSection = document.querySelector(".composition");
  let featuresSection = document.querySelector(".section-features .row");
  let toursSection = document.querySelector(".section-tours .row");
  let footerSection = document.querySelector(".footer-list");
  let menuSection = document.querySelector(".navigation__list");

  const features = [
    {
      icon: "icon-basic-world",
      title: "Explore the world",
      // data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
    {
      icon: "icon-basic-compass",
      title: "Meet nature",
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
    {
      icon: "icon-basic-map",
      title: "Find your way",
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
    {
      icon: "icon-basic-heart",
      title: "Live a healthier life",
      data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
  ];

  const tours = [
    {
      id: "1",
      title: "The Sea Explorer",
      details: [
        "3 day tour",
        "Up to 30 people",
        "2 tour guides",
        "Sleep in cozy hotels",
        "Difficulty: easy",
      ],
      price: "$297",
    },
    {
      id: "2",
      title: "The Forest Hiker",
      details: [
        "7 day tour",
        "Up to 40 people",
        "6 tour guides",
        "Sleep in provided tents",
        "Difficulty: medium",
      ],
      price: "$497",
    },
    {
      id: "3",
      title: "The Snow Adventurer",
      details: [
        "5 day tour",
        "Up to 15 people",
        "3 tour guides",
        "Sleep in snow huts",
        "Difficulty: hard",
      ],
      price: "$897",
    },
  ];

  const listItems = [
    ["About Natours", "Your benefits", "Popular tours", "Stories", "Book Now"], // Navigation Menu
    ["Company", "Contact us", "Careers", "Privacy policy", "Terms"], // Footer Menu
  ];

  // Dynamic Composition of About
  for (var i = 1; i <= 3; i++) {
    let asset = document.createElement("img");
    asset.className = `composition__photo composition__photo--p${i}`;
    asset.src = `img/nat-${i}-large.jpg`;
    asset.srcset = `img/nat-${i}.jpg 300w, img/nat-${i}-large.jpg 1000w`;
    asset.sizes = "(max-width: 900px) 20vh, (max-width: 600px) 30vh, 300px";
    asset.alt = `Photo${i}`;
    compositionSection.append(asset);
  }

  // Dynamic Features Section
  let featureNodes = features.map((item) => {
    let feature = document.createElement("div");
    feature.className = "col-1-of-4";
    let featureInnerHTML = `
        <div class="feature-box">
        <i class="feature-box__icon ${item.icon}"></i>
        <h3 class="heading-tertiary u-margin-bottom-small">${item.title}</h3>
        <p class="feature-box__text">${
          item.data ??
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
        }</p>
        </div>
    `;
    feature.innerHTML = featureInnerHTML;
    return feature;
  });

  featuresSection.append(...featureNodes);

  // Dynamic Tours Section
  let tourNodes = tours.map((item) => {
    let tour = document.createElement("div");
    tour.className = "col-1-of-3";
    let tourInnerHTML = `
        <div class="card">
        <div class="card__side card__side--front">
            <div class="card__picture card__picture--${item.id}">&nbsp;</div>
            <h4 class="card__heading">
            <span class="card__heading-span card__heading-span--${item.id}"
                >${item.title}</span
            >
            </h4>
            <div class="card__details">
            <ul>
                <li>${item.details[0]}</li>
                <li>${item.details[1]}</li>
                <li>${item.details[2]}</li>
                <li>${item.details[3]}</li>
                <li>${item.details[4]}</li>
            </ul>
            </div>
        </div>
        <div class="card__side card__side--back card__side--back-${item.id}">
            <div class="card__cta">
            <div class="card__price-box">
                <p class="card__price-only">Only</p>
                <p class="card__price-value">${item.price}</p>
            </div>
            <a href="#popup" class="btn btn--white">Book now!</a>
            </div>
        </div>
        </div>
    `;
    tour.innerHTML = tourInnerHTML;
    return tour;
  });

  toursSection.append(...tourNodes);

  //Dynamic Navigation Menu Section
  let menuNodes = listItems[0].map((item) => {
    let li = document.createElement("li");
    li.className = "navigation__item";
    li.innerHTML = `<a href="#" class="navigation__link"><span>0${
      listItems[0].indexOf(item) + 1
    }</span>${item}</a>`;
    return li;
  });

  menuSection.append(...menuNodes);

  // Dynamic Footer Section
  let footerNodes = listItems[1].map((item) => {
    let li = document.createElement("li");
    li.className = "footer__item";
    li.innerHTML = `<a href="#" class="footer__link">${item}</a>`;
    return li;
  });

  footerSection.append(...footerNodes);
})();
