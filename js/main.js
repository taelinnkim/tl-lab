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


// GitHub Projects
const projectsGrid = document.querySelector('#projects-grid');
const projectsStatus = document.querySelector('#projects-status');
const retryButton = document.querySelector('#retry-button');

const GITHUB_USERNAME = 'taelinnkim';

const fetchGitHubProjects = async () => {
  projectsStatus.textContent = '프로젝트를 불러오는 중...';
  projectsGrid.innerHTML = '';
  retryButton.hidden = true;

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`
    );

    if (!response.ok) {
      throw new Error('GitHub API 요청에 실패했습니다.');
    }

    const repositories = await response.json();

    if (repositories.length === 0) {
      projectsStatus.textContent = '표시할 프로젝트가 없습니다.';
      return;
    }

    projectsStatus.textContent = '';

    projectsGrid.innerHTML = repositories
      .map((repository) => {
        const {
          name,
          description,
          html_url,
          language
        } = repository;

        return `
          <article class="project-card">
            <h3>${name}</h3>
            <p>${description || '프로젝트 설명이 없습니다.'}</p>
            <p>${language || 'Language not specified'}</p>
            <a href="${html_url}" target="_blank" rel="noopener noreferrer">
              GitHub에서 보기 →
            </a>
          </article>
        `;
      })
      .join('');

  } catch (error) {
    projectsStatus.textContent = '프로젝트를 불러올 수 없습니다.';
    retryButton.hidden = false;
  }
};

retryButton.addEventListener('click', fetchGitHubProjects);

fetchGitHubProjects();

// Contact Form
const contactForm = document.querySelector('#contact-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

const formSuccess = document.querySelector('#form-success');

const showError = (input, errorElement, message) => {
  input.classList.add('error');
  errorElement.textContent = message;
};

const clearError = (input, errorElement) => {
  input.classList.remove('error');
  errorElement.textContent = '';
};

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  formSuccess.textContent = '';

  if (nameInput.value.trim() === '') {
    showError(nameInput, nameError, '이름을 입력해주세요.');
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }

  if (emailInput.value.trim() === '') {
    showError(emailInput, emailError, '이메일을 입력해주세요.');
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, emailError, '올바른 이메일 형식을 입력해주세요.');
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

  if (messageInput.value.trim() === '') {
    showError(messageInput, messageError, '메시지를 입력해주세요.');
    isValid = false;
  } else {
    clearError(messageInput, messageError);
  }

  if (isValid) {
    formSuccess.textContent = '메시지가 정상적으로 확인되었습니다.';
    contactForm.reset();
  }
});