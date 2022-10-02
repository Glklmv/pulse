// $(document).ready(function(){
//     $('.carousel-inner').slick({
//         speed: 300,
//         /* adaptiveHeight: true, */
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left-arr.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/right-arr.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                 dots: false,
//                 arrows: false
//                 }
//             }
//         ]
//         });
//     });



const slider = tns({
    container: '.carousel-inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
    });
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
    });    
document.querySelector('.next').onclick = function () {
    slider.goTo('next');
    };        