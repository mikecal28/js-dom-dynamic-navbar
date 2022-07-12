/* 
Dynamic Navbar

- I don't care what content you have in the navbar
   - IE: logo on the left, links on the right
- Media queries that make the navbar responsive
  - at a particular breakpoint, display a hamburger instead of links
  - clicking the hamburger will open / close the menu showing links

*Advice: 
  - start with the pieces (html skeleton, styles, media queries, js)
  - Don't get hung up in one place too long (move on until nothing's left)
*/

const navBar = document.querySelector(".navbar");
const hamburgerIcon = document.querySelector(".fa-bars");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const linkDiv = document.querySelector(".link-div");

let myBool = true;
const toggler = () => {
  myBool = !myBool;
  return myBool;
};

let myCounter = 0;
const counter = () => myCounter++;

hamburgerIcon.addEventListener("click", (e) => {
  hamburgerMenu.classList.toggle("menu-open");
  navBar.classList.toggle("add-shadow");
  linkDiv.style.display = "flex";
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth >= 721) {
    linkDiv.style.display = "none";
  } else {
    linkDiv.style.display = "flex";
  }
});
