// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");
const closeMenu = document.querySelector(".close-burger");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("active");
    mobileMenu.classList.remove("active");
});