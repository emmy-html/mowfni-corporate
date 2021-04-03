function hamburger() {
    // declare all variables
    var menu = document.getElementById("menu"); // use the DOM to access the navigation menu
    var hamburger = document.getElementById("menu-toggle-button"); // use the DOM to access the hamburger button
    if (menu.style.display !== 'block') { // if the menu is hidden, then display it
        menu.style.display = 'block';
        menu.classList.add('fade-in'); // add a fade effect when menu appears on screen
        hamburger.classList.remove('fa-bars'); // remove the 'hamburger' icon
        hamburger.classList.add('fa-times-circle'); // add the 'close' symbol
    } else { 
        menu.style.display = 'none'; // if the menu is open, hide it again
        hamburger.classList.remove('fa-times-circle'); // remove the 'close' symbol
        hamburger.classList.add('fa-bars'); // replace it with the hamburger icon again
    }
}
// automatic slideshow
var slides = document.querySelectorAll('#slides-companies .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
// spotlight partners slideshow
var slideIndex = 1;
showSlides(slideIndex);
// next/previous controls
function plusSlides(n) {
    showSlides(slideIndex +=n);
}
//slideshow
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }