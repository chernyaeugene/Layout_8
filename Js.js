// Слайдер
const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    parallax: true,
    loop : true,
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 2500,
});

// Бургер
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.header_menu');
if (iconMenu){
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}