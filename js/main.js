// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");
const closeMenu = document.querySelector(".close-burger");

const slider = document.querySelector('#image-slider');
const prevBtn = document.querySelector('#prev-img');
const nextBtn = document.querySelector('#next-img');

let slideWidth = slider.clientWidth;
let currentIndex = 0;


//Functions
function openmenu() {
    mobileMenu.classList.toggle("active");
}

function close() {
    closeMenu.classList.toggle("active");
    mobileMenu.classList.remove("active"); 
}

function showSlide(index) {
    const newTransformValue = -index * slideWidth + 'px';
    slider.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slider.children.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slider.children.length - 1;
    }
    showSlide(currentIndex);
}

function updateSlideWidth() {
    slideWidth = slider.clientWidth;
    showSlide(currentIndex);
}

//Event Listeners
hamburger.addEventListener("click", openmenu);
closeMenu.addEventListener("click", close);
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
window.addEventListener('resize', updateSlideWidth);
updateSlideWidth();