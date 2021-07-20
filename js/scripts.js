const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener("click", close); 

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100vh';
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('#menu', {delay:50});
sr.reveal('#portGallery1', {delay:100});
sr.reveal('.biotext', {delay: 200});
sr.reveal('.biotypo', {delay: 100});
sr.reveal('.contentfigure', {delay: 100});
sr.reveal('.contentcontact', {delay: 200});


   

var slideIndex = 1;
function plusSlides(n) {
   showSlides(slideIndex += n);
 }
function currentSlide(n) {
   showSlides(slideIndex = n);
 }

function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("portGallery");
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

 showSlides(slideIndex);


