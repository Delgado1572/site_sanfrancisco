let slideIndex = 1;
let slideshowTimer;

// ROUBEI DA NO GOOGLE
window.onload = function () {
    if (document.getElementsByClassName("banner-slide").length > 0) {
        initializeSlideshow();
    }
};

function initializeSlideshow() {
    showSlides(slideIndex);
    startTimer();
}

function startTimer() {
    clearTimeout(slideshowTimer);
    slideshowTimer = setTimeout(function () {
        plusSlides(1);
    }, 5000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("banner-slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // DESLIGA A LUZ DO SLIDE DO BANNER
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].style.display = "none";
    }

    // Remove active dos dots (ROUBEI NO GOOGLE)
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('active');

    if (dots.length > 0) {
        dots[slideIndex - 1].classList.add('active');
    }

    startTimer();
}