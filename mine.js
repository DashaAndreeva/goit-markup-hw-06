"use strict";

const mobMenuBtn = document.querySelector(".menu-open-btn");
const closemobMenuBtn = document.querySelector(".menu-close-button");
const menu = document.querySelector(".menu-mob");

const backdropBtn = document.querySelector(".hero-btn");
const backdropCloseBtn = document.querySelector(".modal-button");
const backdrop = document.querySelector(".backdrop");

mobMenuBtn.addEventListener("click", onMenuOpen);
closemobMenuBtn.addEventListener("click", onMenuClose);
backdropBtn.addEventListener("click", onBackdropOpen);
backdropCloseBtn.addEventListener("click", onBackdropClose);

function onMenuOpen() {
  menu.classList.add("is-open");
}

function onMenuClose() {
  menu.classList.remove("is-open");
}

function onBackdropOpen() {
  backdrop.classList.add("is-open");
}

function onBackdropClose() {
  backdrop.classList.remove("is-open");
}
