
let slideIndex = 1;
let slides = document.querySelectorAll('.slideshow__slide');

let dots = document.querySelectorAll('.dots__dot');

showSlides(slideIndex);

dots.forEach(e => {
    e.addEventListener('click', () => currentSlide(e.getAttribute('id')))
});

const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
    plusSlides(prev.getAttribute('id'))
    
})

const next = document.querySelector('.next');
next.addEventListener('click', () => {
    plusSlides(next.getAttribute('id'))
    
})


function plusSlides(n) {
    let result = slideIndex =+ n;
    showSlides(result);
  }

function currentSlide(n) {
    showSlides(slideIndex = n);
    console.log(n)
}



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
    console.log(n)

    let slides = document.querySelectorAll('.slideshow__slide');
    let dots = document.querySelectorAll('.dots__dot');

    if(n > slides.length){slideIndex = 1};

    if(n < 1){slideIndex = slides.length};


    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }

    console.log(slides)
    console.log(dots)
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}
