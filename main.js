document.addEventListener("DOMContentLoaded", HentGentagelser);

async function HentGentagelser() {
  let headerData = await fetch("header.html");
  let header = await headerData.text();
  document.querySelector("#hovedmenu").innerHTML = header;

  let footerData = await fetch("footer.html");
  let footer = await footerData.text();
  document.querySelector("footer").innerHTML = footer;
}
