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
})

sr.reveal('#menu', {delay:50})

/*sr.reveal('.transition', {delay: 100})*/
sr.reveal('.portGallery', {delay: 100})



sr.reveal('.biotext', {delay: 200})
sr.reveal('.biotypo', {delay: 100})
/*sr.reveal('.transition2', {delay: 100})*/


/*sr.reveal('.transition3', {delay: 100})*/
sr.reveal('.contentfigure', {delay: 100})
sr.reveal('.contentcontact', {delay: 200})




