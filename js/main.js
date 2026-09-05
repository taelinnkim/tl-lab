const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const currentTheme =
    document.documentElement.getAttribute('data-theme');

  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);

  localStorage.setItem('theme', newTheme);

  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

const scrollTopButton = document.querySelector('.scroll-top');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add('show');
  } else {
    scrollTopButton.classList.remove('show');
  }

  if (window.scrollY > 60) {
  header.classList.add('scrolled');
} else {
  header.classList.remove('scrolled');
}
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach((element) => {
  observer.observe(element);
});