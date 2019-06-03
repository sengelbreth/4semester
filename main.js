document.addEventListener("DOMContentLoaded", HentGentagelser);

async function HentGentagelser() {
  let footerData = await fetch("footer.html");
  let footer = await footerData.text();
  document.querySelector("footer").innerHTML = footer;
  displayMenuer(x);
}

/* sticky header */
window.addEventListener("scroll", stickyNavigation);
const nav = document.querySelector(".hovedmenu");
const navTop = nav.offsetTop;

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
}

/* bruger menu */
let x = window.matchMedia("(max-width: 600px)");
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
