const open = document.querySelector(".menu-open-btn");
const close = document.querySelector(".menu-close-button");

const menu = document.querySelector(".menu-mob");

function onOpenClick() {
  menu.classList.add("is-open");
}

open.addEventListener("click", onOpenClick);
close.addEventListener("click", onCloseClick);
function onCloseClick() {
  menu.classList.add("visually-hidden");
}
