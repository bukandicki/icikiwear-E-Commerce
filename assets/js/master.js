$(document).ready(function (  ){
    
    $('.slider-container').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        arrows: true,
        cssEase: 'ease-out',
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});