const openModalBtn = document.querySelector("#open-modal-btn");
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openModalBtn.addEventListener("click", (e) => {
  modal.classList.add("open");
  overlay.classList.add("open");
});
closeModalBtn.addEventListener("click", (e) => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
overlay.addEventListener("click", (e) => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
