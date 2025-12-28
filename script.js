let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}


window.onscroll = () =>
{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    
    navbar.classList.remove('active');
}





document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,          // Default number of visible slides
        centeredSlides: true,       // Center the active slide
        spaceBetween: 30,           // Space between slides
        loop: true,                 // Loop slides infinitely
        autoplay: {
            delay: 3000,              // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,          // Allow pagination clicks
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {                 // Responsive breakpoints
            300: {                     // Mobile (width 320px and up)
                slidesPerView: 1,       // 1 slide visible
                spaceBetween: 10,       // Reduced space between slides
            },
            640: {                     // Tablets (width 640px and up)
                slidesPerView: 2,       // 2 slides visible
                spaceBetween: 20,       // Space between slides for tablet view
            },
            1024: {                    // Desktop (width 1024px and up)
                slidesPerView: 3,       // 3 slides visible
                spaceBetween: 30,       // Normal space between slides
            }
        }
    });
});
