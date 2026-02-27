// Corrected Script.js
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Fix: Capital 'T' in Typed and correct property name 'typeSpeed'
var typed = new Typed(".input", {
    strings: ["UX-Designer", "Graphic Designer", "Web Developer"],
    typeSpeed: 70, // Fixed: removed the 'd'
    backSpeed: 50,
    loop: true
});