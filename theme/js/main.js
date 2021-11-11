$(document).ready(function () {

    // Navbar ////////
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".navbar").addClass("navbar-scroll");
        }
        else {
            $(".navbar").removeClass("navbar-scroll");
        }
    });

    // Smooth Scroll ////////
    $('a[href^="#"]').on('click', function (e) {
        var target = this.hash, $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset()
        },
            100, 'swing', function () {
                window.location.hash = target;
            });
    });

    // Scroll ////////
    $('.scroll-pane').jScrollPane();

    // Parallax ////////
    var rellax = new Rellax('.rellax');

    // Carousel Workflow ////////
    $('.owl-workflow').owlCarousel({
        animateOut: 'animate__fadeOutDown',
        animateIn: 'animate__zoomIn',
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 7000,
        responsiveRefreshRate: 100,
        mouseDrag: false,
        touchDrag: true,
    });

    // Carousel Clients ////////
    var owl = $('.owl-client');
    owl.owlCarousel({
        dots: false,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });

    // Carousel Testimonials
    const swiper = new Swiper('.swiper-horizontal-3d', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        },
    });

});