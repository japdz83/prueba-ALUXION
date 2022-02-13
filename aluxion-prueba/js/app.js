// Variables
const btn = document.querySelector('#btn');

// Event Menu Overlay
btn.addEventListener('click', function(e) {
    let menu = document.querySelector('#menu');
    let btn = document.querySelector('#btn');
    let logo = document.querySelector('.logo');
    let footer1 = document.querySelector('.footer-menu-1');
    let footer2 = document.querySelector('.footer-menu-2');
    let menuList = document.querySelector('.menu-list');


    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');
    logo.classList.toggle('is-active');
    setTimeout(() => {
        menuList.classList.toggle('is-active');
        footer1.classList.toggle('is-active');
        footer2.classList.toggle('is-active');
    }, 1100);

    e.preventDefault();
});


// Event Slide Product
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}