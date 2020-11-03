var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});

let bg = document.getElementById("bg");
let cloud = document.getElementById("cloud");
let mountain = document.getElementById("mountain");
let me = document.getElementById("me");
let judul = document.getElementById("judul");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    cloud.style.left = -value * 0.1 + 'px';
    mountain.style.top = -value * 0.05 + 'px';
    me.style.top = value * 0.15 + 'px';
    judul.style.top = value * 0.5 + 'px';
    cloud.style.top = value * 0.1 + 'px';
    subjudul.style.top = value * 0.5 + 'px';
})

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('dark');
    }
    else{
        $('nav').removeClass('dark');
    }
})

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
let navUlLi = document.getElementsByTagName('nav ul li');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
})
navUlLi.addEventListener('click', () => {
    navUL.classList.toggle('show');
})


