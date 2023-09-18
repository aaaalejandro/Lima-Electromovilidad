//TODOS Preloader
var carga = document.getElementById("preloader");
setTimeout(function() {
    carga.style.opacity="1.0";
    carga.style.opacity="0.75";
    carga.style.opacity="0.5";
    carga.style.opacity="0";
    carga.style.visibility="hidden";
},2150);
//TODOS Preguntas
window.sr = ScrollReveal(),
sr.reveal('#logo', {
    delay: 375,
    duration: 500,
    reset: true
});
sr.reveal('.navbar-nav', {
duration: 1000,
origin: "left",
distance: "500px"
});
sr.reveal('section', {
duration: 1750,
origin: "top",
distance: "500px"
});
sr.reveal('main', {
duration: 1750,
origin: "bottom",
distance: "500px"
});