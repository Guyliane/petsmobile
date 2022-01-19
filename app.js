const menu = document.querySelector('.liste-nav');
const btnMenu = document.querySelector('.btn-toggle-container');
const allNavItem = document.querySelectorAll('.item-nav');
const btn = document.querySelector('.btn1');

const aproposContainer = document.querySelector('.card-about');


const imgProfil = document.querySelector('.imgProfil');
const unOs = document.querySelector('.imgOs');
const ressort = document.querySelector('.ressort');

gsap.registerPlugin(ScrollTrigger);

gsap.from(imgProfil, { y: 200, duration: 1, ease: "elastic.out(1, 0.3)" })

gsap.to(unOs, { 
    scrollTrigger : {
        trigger : aproposContainer,
        toggleActions : "restart pause resume none",
        scrub : 1
    },
    x: 1200, 
    duration: 3, 
    rotation : 80});

gsap.to(ressort, { 
    scrollTrigger : {
        trigger : ressort,
        toggleActions : "restart pause resume none",
        scrub : 1
    },
    x: -1000,
    y : -200, 
    duration: 3, 
    rotation : 80});

/* #region  BOUTON HAMBURGER */
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active-menu')
})

allNavItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active-menu')
        btn.classList.toggle('active')
    })
})

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
})
/* #endregion */