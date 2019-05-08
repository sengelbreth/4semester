document.addEventListener("DOMContentLoaded", HentGentagelser);

async function HentGentagelser() {
  let headerData = await fetch("header.html");
  let header = await headerData.text();
  document.querySelector(".hovedmenu").innerHTML = header;

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
