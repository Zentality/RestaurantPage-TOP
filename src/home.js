import chef from './PizzaUnsplashBenuMarinescu.jpg';

let homePage = (() => {
  let home = document.createElement("div");
  home.classList.add("home");
  let text = document.createElement("div");
  let textOne = document.createElement("p");
  textOne.textContent = "Greatest pizza in Italia Town";
  let textTwo = document.createElement("p");
  textTwo.textContent = "All Pizzas are made fresh to order inhouse with locally sourced ingredients. If you have any allergies and special dietary requirements please be sure to let one of our team members know when placing your order. We hope you enjoy our pizzas made with love, feedback would be greatly appreciated.";
  let textThree = document.createElement("p");
  textThree.textContent = "Established 2019";
  let chefImageContainer = document.createElement("figure");
  chefImageContainer.classList.add("chefImageContainer");
  let chefImage = document.createElement("img");
  chefImage.src = chef;
  chefImage.classList.add("chefImage");
  let chefCaption = document.createElement("figcaption");
  chefCaption.textContent = "Mario cooking up a storm";
  chefImageContainer.append(chefImage, chefCaption);

  text.append(textOne, textTwo, textThree);

  home.append(chefImageContainer, text);

  return home;
})();


export default homePage;