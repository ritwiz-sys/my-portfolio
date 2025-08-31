const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if(savedTheme){
  body.classList.toggle('dark-theme', savedTheme==='dark');
  themeToggle.textContent = savedTheme==='dark' ? '☀️' : '🌙';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if(body.classList.contains('dark-theme')){
    localStorage.setItem('theme','dark');
    themeToggle.textContent='☀️';
  } else {
    localStorage.setItem('theme','light');
    themeToggle.textContent='🌙';
  }
});
