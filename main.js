// smooth scroll

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    speedAsDuration: true
});

// click on hamburger menu

const hamburger = document.getElementById('header');
const navUl = document.getElementById('container-header');

hamburger.addEventListener('click',() =>{
    navUl.classList.toggle('active');
})


// GSAP animation

gsap.from('.header '                , { opacity:0 , y : '-20px' , duration: .5   , delay : .5})
gsap.from('.main-page-text h1'      , { opacity:0 , y : '-20px' , duration: .5   , delay : .7})
gsap.from('.main-page-img'          , { opacity:0 , y : '-20px' , duration: 1.2  , delay : .7})
gsap.from('.main-page-text h4'      , { opacity:0 , y : '-20px' , duration: .5   , delay : .9})
gsap.from('.main-page-text hr'      , { opacity:0 , y : '-20px' , duration: .5   , delay : 1.1})
gsap.from('.main-page-text p'       , { opacity:0 , y : '-20px' , duration: .5   , delay : 1.3})
gsap.from('.main-page-text ul'      , { opacity:0 , y : '-20px' , duration: .5   , delay : 1.5})
gsap.from('.buttons'                , { opacity:0 , y : '-20px' , duration: .5   , delay : 1.7})







