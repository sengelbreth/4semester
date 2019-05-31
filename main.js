document.addEventListener("DOMContentLoaded", HentGentagelser);

async function HentGentagelser() {
  let footerData = await fetch("footer.html");
  let footer = await footerData.text();
  document.querySelector("footer").innerHTML = footer;
}

/* sticky header */

const nav = document.querySelector(".hovedmenu");
const navTop = nav.offsetTop;

window.addEventListener("scroll", stickyNavigation);

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
}

/* bruger menu */

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    mobilmenu();
  } else {
    normalmenu();
  }
}
let x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

async function mobilmenu() {
  let brugerData = await fetch("mobilmenu.html");
  let bruger = await brugerData.text();
  document.querySelector(".hovedmenu").innerHTML = bruger;
}

async function normalmenu() {
  let headerData = await fetch("header.html");
  let header = await headerData.text();
  document.querySelector(".hovedmenu").innerHTML = header;
}

/* -------------------- knapper forsiden ----------------------- */
function displayKnapper(y) {
  if (y.matches) {
    document.getElementsByClassName(".smallscreen").classList.remove("hide");
  } else {
    document.getElementsByClassName(".smallscreen").classList.add("hide");
  }
}

let y = window.matchMedia("(max-width: 700px)");
displayKnapper(y); // Call listener function at run time
y.addListener(displayKnapper); // Attach listener function on state changes
