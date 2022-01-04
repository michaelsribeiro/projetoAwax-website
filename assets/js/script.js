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

// Gallery Filter (jQuery)
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