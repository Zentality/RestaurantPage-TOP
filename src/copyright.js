import ghIcon from './github.svg';

let copyright = (() => {
  let copyright = document.createElement("div");
  copyright.classList.add("copyright");

  let span = document.createElement("span");
  span.textContent = "Copyright 2022";

  let link = document.createElement("a");
  link.href = "https://github.com/Zentality";
  let icon = document.createElement("img");
  icon.src = ghIcon;
  icon.alt = "github icon";
  
  link.textContent = "Zentality";
  link.prepend(icon);

  copyright.append(span, link);

  return copyright;
})();

export default copyright;