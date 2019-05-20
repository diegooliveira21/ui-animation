var navToggle = document.querySelector(".navbar-burger");
var navMenu = document.querySelector(".navbar-menu");

function menuToggleIn() {
  if (navMenu.classList.contains("is-active") === false) {
    navToggle.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");

    navMenu.classList.add("animated");
    navMenu.classList.toggle("fadeIn");

    menuToggleStart();
  } else {
    navMenu.classList.toggle("fadeIn");
    navMenu.classList.toggle("fadeOut");

    navMenu.addEventListener("animationend", menuToggleEnd);
  }
}

function menuToggleEnd() {
  navToggle.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
  navMenu.classList.toggle("fadeOut");
}

function menuToggleStart() {
  navMenu.removeEventListener("animationend", menuToggleEnd);
}

navToggle.addEventListener("click", menuToggleIn);
