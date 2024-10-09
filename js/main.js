// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");
const closeMenu = document.querySelector(".close-burger");


//Functions
function openmenu() {
    mobileMenu.classList.toggle("active");
}

function close() {
    closeMenu.classList.toggle("active");
    mobileMenu.classList.remove("active"); 
}

//Event Listeners
hamburger.addEventListener("click", openmenu);
closeMenu.addEventListener("click", close);