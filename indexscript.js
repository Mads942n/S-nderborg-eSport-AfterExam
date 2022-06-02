let slideIndex = 1;
let slides = document.querySelectorAll('.slideshow__slide');
let dots = document.querySelectorAll('.dots__dot');
showSlides(slideIndex);
/* Adding event listeners to the dots and the arrows. */
dots.forEach(e => {
    e.addEventListener('click', () => currentSlide(e.getAttribute('id')))
});
const prev = document.querySelector('.arrowsection__prev');
prev.addEventListener('click', () => {
    plusSlides(prev.getAttribute('id'))
})
const next = document.querySelector('.arrowsection__next');
next.addEventListener('click', () => {
    plusSlides(next.getAttribute('id'))
})
function plusSlides(n) {
    let result = slideIndex =+ n;
    showSlides(result);
  }
/**
 * A function that is called when the user clicks on a dot. 
 * It takes the number of the dot that was
 * clicked and passes it to the showSlides function.
 * @param n - The index of the slide to show.
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/**
 * Set a timeout to call the currentSlide function with the 
 * next slide index, and then call the
 * slideshowloop function again.
 */
let x = 1
//slideshowloop();
function slideshowloop(){
    setTimeout(() => {
        currentSlide(slideIndex + 1)
        slideshowloop()
    }, 500);
}
function showSlides(n) {
    let i;

    /* Selecting all the elements with the class name 
    slideshow__slide and dots__dot. */
    let slides = document.querySelectorAll('.slideshow__slide');
    let dots = document.querySelectorAll('.dots__dot');

    /* Checking if the slideIndex is greater than the number 
    of slides, if it is, it sets the
    slideIndex to 1. If the slideIndex is less than 1, it sets the 
    slideIndex to the number of slides. */
    if(n > slides.length){slideIndex = 1};
    if(n < 1){slideIndex = slides.length};
    /* Looping through the slides and setting the display to none. */
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    /* Removing the active class from all the dots. */
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slides)
    console.log(dots)
    /* Setting the display of the slide to block and
    the class name of the dot to active. */
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
