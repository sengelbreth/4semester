document.addEventListener("DOMContentLoaded", modalLisners);

function modalLisners() {
  document.querySelector("#submitbtn").addEventListener("click", openModal);
  document.querySelector("#myModal").addEventListener("click", lukModalVindue);
}

document.querySelector(".close").addEventListener("click", closeModal);
let modal = document.querySelector("#myModal");
function openModal() {
  modal.style.display = "block";
  console.log(" OI !!!!");
}

function closeModal() {
  modal.style.display = "none";
}

function lukModalVindue() {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
