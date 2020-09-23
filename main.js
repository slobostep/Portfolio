// smooth scroll

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000,
    speedAsDuration: true
});




// Header background change on scroll

const header = document.querySelector('.header');
window.onscroll = function(){
    var top = window.scrollY;
    if(top>=20){
        header.classList.add('paint');
    }else{
        header.classList.remove('paint');
    }
}


// click on hamburger menu

const hamburger = document.getElementById('header');
const navUl = document.getElementById('container-header');

hamburger.addEventListener('click',() =>{
    navUl.classList.toggle('active');
})






