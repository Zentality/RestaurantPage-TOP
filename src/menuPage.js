import './menuStyle.css'
import pepperoni from './Pepperoni.jpg';
import supreme from './Supreme.jpg';
import wedges from './Wedges.jpg';

let menuPage = (() => {
  let menuPage = document.createElement("div");
  menuPage.classList.add("menu");

  let itemCreate = (imgSrc, newMenuItemTitle, newMenuItemDesc, newMenuItemPrice) => {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");

    let textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");
    
    let menuImageContainer = document.createElement("div");
    menuImageContainer.classList.add("menuImage");
    let menuImage = document.createElement("img");
    menuImage.src = imgSrc;
    menuImageContainer.append(menuImage);
    menuItem.append(menuImageContainer, textContainer);
    
    let menuItemTitle = document.createElement("h2");
    menuItemTitle.textContent = newMenuItemTitle;
    
    let menuItemDesc = document.createElement("p");
    menuItemDesc.textContent = newMenuItemDesc;
    
    let menuItemPrice = document.createElement("p");
    menuItemPrice.textContent = newMenuItemPrice;
    textContainer.append(menuItemTitle, menuItemDesc, menuItemPrice);

    menuPage.appendChild(menuItem);
  };

  itemCreate(pepperoni, "Pepperoni Pizza", "An Italian classic. Slices of crispy pepperoni & creamy mozzarella", "$10");
  itemCreate(supreme, "Supremo Pizza", "Crispy rasher bacon, pepperoni & Italian sausage, topped with fresh mushrooms, capsicum, crumbled beef & juicy pineapple, finished with vibrant spring onions & oregano", "$12");
  itemCreate(wedges, "Wedges", "Oven baked wedges dusted with our special recipe seasoned salt", "$7");

  return menuPage;
})();


export default menuPage;