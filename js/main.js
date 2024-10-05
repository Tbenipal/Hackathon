// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");
const closeMenu = document.querySelector(".close-burger");
const iconsHero = document.querySelectorAll('.icon');

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("active");
    mobileMenu.classList.remove("active");
});

iconsHero.forEach((icon, index) => {
if (index % 2 === 0) {
icon.style.animation = 'float 10s linear infinite';
} 
else {
icon.style.animation = 'float-back 10s linear infinite'; }
icon.style.animationDelay = '0s'; 
});