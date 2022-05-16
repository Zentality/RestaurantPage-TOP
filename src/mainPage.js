let mainPage = (() => {
  let page = document.createElement("div");
  page.classList.add("page");

  let header = document.createElement("div");
  header.classList.add("header");
  let title = document.createElement("h1");
  title.textContent = "Papa Joe's Pizzeria";
  header.appendChild(title);
  let nav = document.createElement("div");
  nav.classList.add("nav");
  let homeButton = document.createElement("span");
  homeButton.textContent = "Home";
  let menuButton = document.createElement("span");
  menuButton.textContent = "Menu";
  let contactButton = document.createElement("span");
  contactButton.textContent = "Contact";
  nav.append(homeButton, menuButton, contactButton);
  header.appendChild(nav);
  page.appendChild(header);

  let tabContent = document.createElement("div");
  tabContent.classList.add("tab");
  page.appendChild(tabContent);

  return page;
})();



export default mainPage;