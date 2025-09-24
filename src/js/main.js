// 1️⃣ Navbar shrink
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('small');
  else navbar.classList.remove('small');
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
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) link.classList.add('active');
      });
    }
  });
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[navLinks.length - 1].classList.add('active');
  }
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// 3️⃣ Carousel
let slides = document.querySelectorAll('.slide');
let current = 0;
function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
}
document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});
document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// 4️⃣ Modal
const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const span = document.querySelector('.close');
modal.style.display = 'none';
btn.onclick = () => { modal.style.display = 'flex'; }
span.onclick = () => { modal.style.display = 'none'; }
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; }
