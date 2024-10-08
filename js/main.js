// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");
const closeMenu = document.querySelector(".close-burger");
const iconsHero = document.querySelectorAll('.icon');
const images = ['images/imagesw1.jpg','images/imagesw2.jpg','images/imagesw3.jpg', 'images/imagesw4.jpg'];
const projectExhibitImage = document.querySelector('#students-exhibit-switch');
let imageCounter = 0;

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("active");
    mobileMenu.classList.remove("active");
});