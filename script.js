// Sidebar toggle
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  if(window.innerWidth <= 768){
    sidebar.classList.toggle("active");
  }
});
document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', () => sidebar.classList.remove('active'));
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    sidebar.classList.remove('active');
  });
});

// Projects carousel
const carousel = document.querySelector(".projects-carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const scrollAmount = 300;

nextBtn.addEventListener("click", () => carousel.scrollBy({left: scrollAmount, behavior:'smooth'}));
prevBtn.addEventListener("click", () => carousel.scrollBy({left: -scrollAmount, behavior:'smooth'}));
