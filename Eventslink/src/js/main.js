document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-1', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            prevEl: '.next-button-1',
            nextEl: '.prev-button-1',
        },
        loop: false,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            480: {
                slidesPerView: 2,
            },
        }
    });

    const prevButton = document.querySelector('.prev-button-1');
    const nextButton = document.querySelector('.next-button-1');

    nextButton.style.display = 'none';

    prevButton.addEventListener('click', function () {
        nextButton.style.display = 'block';
    });

    swiper.on('slideChange', function () {
        if (swiper.activeIndex === 0) {
            nextButton.style.display = 'none'; 
        }
    });

    const swiper2 = new Swiper('.swiper-2', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            prevEl: '.next-button-2',
            nextEl: '.prev-button-2',
        },
        loop: false,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            480: {
                slidesPerView: 2,
            },
        }
    });

    const prevButton2 = document.querySelector('.prev-button-2');
    const nextButton2 = document.querySelector('.next-button-2');

    nextButton2.style.display = 'none';

    prevButton2.addEventListener('click', function () {
        nextButton2.style.display = 'block';
    });

    swiper2.on('slideChange', function () {
        if (swiper2.activeIndex === 0) {
            nextButton2.style.display = 'none'; 
        }
    });
});
