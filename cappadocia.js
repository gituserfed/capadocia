
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






const dialog = document.getElementById("loremDialog");
const openButton = document.getElementById("openDialog");
const closeButton = document.getElementById("closeDialog");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});




const scrollToTopBtn = document.getElementById('scrollToTopBtn'); 
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block"; 
    } else {
        scrollToTopBtn.style.display = "none"; 
    }
};


function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();