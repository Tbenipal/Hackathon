// Variables
const player = new Plyr('video');
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

document.addEventListener('DOMContentLoaded', function() {
    const totalIcons = document.querySelectorAll('.icon');
    totalIcons.forEach((icon, index) => {
        if (index % 2 === 0) {
            icon.style.animation = 'float 10s linear infinite';
        } else {
            icon.style.animation = 'float-back 10s linear infinite'; 
        }
        icon.style.animationDelay = '0s'; 
    });
});