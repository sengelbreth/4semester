document.addEventListener("DOMContentLoaded", HentGentagelser);

async function HentGentagelser() {
  let footerData = await fetch("footer.html");
  let footer = await footerData.text();
  document.querySelector("footer").innerHTML = footer;
  init();
}

function init() {
  displayMenuer(x); // Call listener function at run time
  displayKnapper(y);
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
let x = window.matchMedia("(max-width: 700px)");
x.addListener(displayMenuer); // Attach listener function on state changes
function displayMenuer(x) {
  if (x.matches) {
    // If media query matches
    mobilmenu();
  } else {
    normalmenu();
  }
}

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
let y = window.matchMedia("(max-width: 700px)");
y.addListener(displayKnapper); // Attach listener function on state changes
function displayKnapper(y) {
  if (y.matches) {
    document.querySelector("#smallscreen").classList.remove("hide");
    document.querySelector("#smallscreen1").classList.remove("hide");
    document.querySelector("#smallscreen2").classList.remove("hide");
    document.querySelector("#smallscreen3").classList.remove("hide");
    document.querySelector("#bigscreen").classList.add("hide");
    document.querySelector("#bigscreen1").classList.add("hide");
    document.querySelector("#bigscreen2").classList.add("hide");
    document.querySelector("#bigscreen3").classList.add("hide");
  } else {
    document.querySelector("#smallscreen").classList.add("hide");
    document.querySelector("#smallscreen1").classList.add("hide");
    document.querySelector("#smallscreen2").classList.add("hide");
    document.querySelector("#smallscreen3").classList.add("hide");
    document.querySelector("#bigscreen").classList.remove("hide");
    document.querySelector("#bigscreen1").classList.remove("hide");
    document.querySelector("#bigscreen2").classList.remove("hide");
    document.querySelector("#bigscreen3").classList.remove("hide");
  }
}
