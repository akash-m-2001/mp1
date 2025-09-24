// 1️⃣ Navbar shrink
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) navbar.classList.add('small');else navbar.classList.remove('small');
});

// 2️⃣ Scroll Position Indicator
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('#navbar ul li a');
function updateActiveNav() {
  var scrollPos = window.scrollY + navbar.offsetHeight + 5;
  sections.forEach(function (section) {
    var top = section.offsetTop;
    var bottom = top + section.offsetHeight;
    var id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) link.classList.add('active');
      });
    }
  });
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    navLinks.forEach(function (link) {
      return link.classList.remove('active');
    });
    navLinks[navLinks.length - 1].classList.add('active');
  }
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// 3️⃣ Carousel
var slides = document.querySelectorAll('.slide');
var current = 0;
function showSlide(index) {
  slides.forEach(function (s) {
    return s.classList.remove('active');
  });
  slides[index].classList.add('active');
}
document.querySelector('.next').addEventListener('click', function () {
  current = (current + 1) % slides.length;
  showSlide(current);
});
document.querySelector('.prev').addEventListener('click', function () {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// 4️⃣ Modal
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModal');
var span = document.querySelector('.close');
modal.style.display = 'none';
btn.onclick = function () {
  modal.style.display = 'flex';
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (e) {
  if (e.target === modal) modal.style.display = 'none';
};