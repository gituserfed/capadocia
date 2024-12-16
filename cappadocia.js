
const photo = document.querySelector('.photo');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const photos = Array.from(photo.querySelectorAll('img'));
const photoCount = photos.length;
let photoIndex = 0;



prevBtn.addEventListener('click', showPreviousPhoto);
nextBtn.addEventListener('click', showNextPhoto);



function showPreviousPhoto() {
  photoIndex = (photoIndex - 1 + photoCount) % photoCount;
  updatephoto();
}



function showNextPhoto() {
  photoIndex = (photoIndex + 1) % photoCount;
  updatephoto();
}



function updatephoto() {
  photos.forEach((slide, index) => {
    if (index === photoIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}


updatephoto();






const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));[1]
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();






