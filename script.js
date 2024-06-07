let slideIndex = 0;
const slides = document.querySelectorAll(".carousel img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let autoSlideTimeout;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

function autoSlideShow() {
    if (window.innerWidth <= 768) {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
        autoSlideTimeout = setTimeout(autoSlideShow, 3000); // Change image every 3 seconds
    }
}

prevButton.addEventListener("click", () => changeSlide(-1));
nextButton.addEventListener("click", () => changeSlide(1));

// Initialize the slideshow
showSlide(slideIndex);

// Start automatic slideshow if on mobile
if (window.innerWidth <= 768) {
    autoSlideShow();
}

// Adjust slideshow behavior on window resize
window.onresize = function() {
    clearTimeout(autoSlideTimeout); // Clear the previous timeout to prevent multiple intervals
    if (window.innerWidth <= 768) {
        autoSlideShow();
    }
};
