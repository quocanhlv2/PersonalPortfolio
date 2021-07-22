const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

$( document ).ready(function() {
    sr.reveal('.text', {delay: 200});
    sr.reveal('.logo', {delay: 100});
});