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

iconsHero.forEach((icon, index) => {
if (index % 2 === 0) {
icon.style.animation = 'float 10s linear infinite';
} 
else {
icon.style.animation = 'float-back 10s linear infinite'; }
icon.style.animationDelay = '0s'; 
});

function imageChanger() {
if (imageCounter < images.length - 1){
imageCounter++; 
} 

else{    
imageCounter = 0;
}
projectExhibitImage.src = images[imageCounter];

}


setInterval(imageChanger, 3000);