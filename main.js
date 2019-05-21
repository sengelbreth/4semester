document.addEventListener("DOMContentLoaded", HentGentagelser);

async function HentGentagelser() {
  let headerData = await fetch("header.html");
  let header = await headerData.text();
  document.querySelector(".hovedmenu").innerHTML = header;

  let footerData = await fetch("footer.html");
  let footer = await footerData.text();
  document.querySelector("footer").innerHTML = footer;

  let brugerData = await fetch("mobilmenu.html");
  let bruger = await brugerData.text();
  document.querySelector(".hovedmenu").innerHTML = bruger;
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
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
