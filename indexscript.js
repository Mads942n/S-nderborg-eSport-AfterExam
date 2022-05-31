
let slideIndex = 1;
slides = document.querySelectorAll('.slideshow__slide');

dots = document.querySelectorAll('.dots__dot');

showSlides(slideIndex);

dots.forEach(e => {
    e.addEventListener('click', () => currentSlide(e.getAttribute('id')))
});

function currentSlide(n) {
    showSlides(slideIndex = n);
    console.log(n)
}

let x = 1

while (x > 1, x++){
    setTimeout(() => {
        currentSlide(slideIndex + 1)
    }, 500);
}


function showSlides(n) {
  let i;
  
  if(n > slides.length){slideIndex = 1};

  if(n < 1){slideIndex.slides.length};


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
