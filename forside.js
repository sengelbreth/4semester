document.addEventListener("DOMContentLoaded", init);

function init() {
  displayKnapper(y);
}

/* -------------------- knapper forsiden ----------------------- */
let y = window.matchMedia("(max-width: 1000px)");
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
