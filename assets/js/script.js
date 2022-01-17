// Menu dropdown
window.onload = function(){
    document.querySelector(".toggle").addEventListener("click", function() {
         if(document.querySelector("nav").style.display == "block") {
                document.querySelector("nav").style.display = "none";
         } else {
            document.querySelector("nav").style.display = "block";
         }
    });
};


let link = $('.menu');
link.on('click', function() {
    link.removeClass('active');
    $(this).addClass('active');
})

const menuItems = document.querySelectorAll('nav a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",        
    });
}

// Carousel
let currentSlide =0;
let totalSlides = document.querySelectorAll('.carousel-item').length;
document.querySelector('.carousel-inner').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.carousel-dots').style.height = `${document.querySelector('.carousel').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {currentSlide = totalSlides - 1;}
    updateMargin();
}
function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {currentSlide = 0;}
    updateMargin();
}

function updateMargin() {
    let sliderWidth = document.querySelector('.carousel-item').clientWidth;
    let newMargin = (currentSlide * sliderWidth);
    document.querySelector('.carousel-inner').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 10000);

// Gallery Filter
$(document).ready(function() {
    $('.filter-list').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.projects-photo').show('1000');
        } else {
            $('.projects-photo').not('.'+value).hide('1000');
            $('.projects-photo').filter('.'+value).show('1000');
        }
    })
    $('.filter-list').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

});

$(document).ready(function(){
    $(".owl-one").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
            },
            600:{
                items: 2
            },
            900:{
                items: 3,
            },
            1200:{
                items: 3
            }
        }
    });
});

$(document).ready(function(){
    $(".owl-two").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,   
    });
});

$(document).ready(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});

function toTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function hideTopBtn() {
    window.scrollY === 0 ? document.querySelector('.topbtn').style.display = 'none' : document.querySelector('.topbtn').style.display = 'block';
}
window.addEventListener('scroll', hideTopBtn);