import './styles.css'
import mainPage from './mainPage';
import homePage from './home';
import menuPage from './menuPage';

let page = document.querySelector("#content");
page.appendChild(mainPage);

let contentBlock = document.querySelector(".tab");

contentBlock.appendChild(homePage);

let navButtons = document.querySelectorAll(".nav span");

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    navButtons.forEach((buttonDeactivate) => buttonDeactivate.classList.remove("active"));
    button.classList.add("active");

    switch (event.target.textContent) {
      case "Home":
        contentBlock.textContent = "";
        contentBlock.appendChild(homePage);
        break;
      case "Menu":
        contentBlock.textContent = "";
        contentBlock.appendChild(menuPage);
        break;
      case "Contact":
        contentBlock.textContent = "";
        break;
    }
  })
})