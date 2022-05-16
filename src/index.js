import './styles.css'
import mainPage from './mainPage';
import homePage from './home';

let page = document.querySelector("#content");
page.appendChild(mainPage);

let contentBlock = document.querySelector(".tab");

contentBlock.appendChild(homePage);