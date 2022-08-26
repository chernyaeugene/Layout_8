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