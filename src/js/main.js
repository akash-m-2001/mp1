// 1️⃣ Navbar shrink on scroll
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';
import img5 from '../assets/image5.png';
import img6 from '../assets/image6.png';
import img7 from '../assets/image7.png';

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('small');
  } else {
    navbar.classList.remove('small');
  }
});

// 2️⃣ Scroll Position Indicator
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar ul li a');

function updateActiveNav() {
  const scrollPos = window.scrollY + navbar.offsetHeight + 5;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`#navbar a[href="#${id}"]`)?.classList.add('active');
    }
  });

  // Handle last section when scrolled to bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[navLinks.length - 1].classList.add('active');
  }
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// 3️⃣ Projects Carousel
const projectImgs = [img1, img2, img3, img4,img5, img6, img7];
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Initialize slides
slides.forEach((slide, index) => {
  slide.querySelector('img').src = projectImgs[index];
  slide.classList.remove('active');
});
slides[currentSlide].classList.add('active');

// Show slide function
function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
}

// Next & Prev buttons
document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', () => {
  // --- Project Image Modal ---
  const imgModal = document.getElementById('imgModal');
  const modalImg = imgModal.querySelector('.modal-img');
  const modalClose = imgModal.querySelector('.close');

  slides.forEach(slide => {
    const img = slide.querySelector('img');
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      imgModal.classList.add('show'); // use class toggle for smooth appearance
    });
  });

  modalClose.addEventListener('click', () => imgModal.classList.remove('show'));
  imgModal.addEventListener('click', e => {
    if (e.target === imgModal) imgModal.classList.remove('show');
  });

 const contactBtn = document.getElementById('openModal');
const contactModal = document.getElementById('contactModal');
const contactClose = contactModal.querySelector('.close');
const contactForm = document.getElementById('contactForm');
const responseText = contactModal.querySelector('.form-response');

// Open modal
contactBtn.addEventListener('click', () => {
  contactModal.classList.add('show');
});

// Close modal
contactClose.addEventListener('click', () => {
  contactModal.classList.remove('show');
});
contactModal.addEventListener('click', e => {
  if (e.target === contactModal) contactModal.classList.remove('show');
});

// Form submit (just mock, no backend)
  contactForm.addEventListener('submit', e => {
  e.preventDefault();
  responseText.textContent = "Thanks! Your message has been sent.";
  contactForm.reset();
});

});