/**
 * Main Interactive Logic for Aiswaria Benny Portfolio
 * Handles DOM rendering from content.js, Loader flow, and Cursor lerp glows.
 */

document.addEventListener('DOMContentLoaded', () => {
  const content = window.PORTFOLIO_CONTENT;
  if (!content) {
    console.error('PORTFOLIO_CONTENT not found in content.js!');
    return;
  }

  /* ==========================================
     1. DOM RENDERING FROM CONTENT.JS
     ========================================== */
  renderPortfolioContent(content);

  /* ==========================================
     2. LOADER LOGIC
     ========================================== */
  initLoader();

  /* ==========================================
     3. INTERACTIVE CURSOR EFFECTS (LERP EASING)
     ========================================== */
  initCursorEffects();

  /* ==========================================
     4. CONTACT FORM MAILTO GENERATOR
     ========================================== */
  initContactForm(content.personal.email);
});

/**
 * Render all DOM text and elements using content.js
 */
function renderPortfolioContent(content) {
  const { personal, hero, about, projects, contact } = content;

  // Loader Name
  const loaderNameEl = document.getElementById('loader-name');
  if (loaderNameEl && personal.name) {
    loaderNameEl.textContent = personal.name.toUpperCase();
  }

  // Hero Section
  const heroTaglineEl = document.getElementById('hero-tagline');
  if (heroTaglineEl) heroTaglineEl.textContent = personal.tagline;

  const heroCtaEl = document.getElementById('hero-cta-btn');
  if (heroCtaEl) heroCtaEl.textContent = hero.buttonText;

  // About Section
  const aboutTitleEl = document.getElementById('about-title');
  if (aboutTitleEl) aboutTitleEl.textContent = about.title;

  const aboutTextEl = document.getElementById('about-text');
  if (aboutTextEl) aboutTextEl.textContent = about.text;

  const skillsListEl = document.getElementById('skills-list');
  if (skillsListEl && Array.isArray(about.skills)) {
    skillsListEl.innerHTML = about.skills
      .map(skill => `<li class="skill-tag">${escapeHtml(skill)}</li>`)
      .join('');
  }

  // Projects Section
  const projectsTitleEl = document.getElementById('projects-title');
  if (projectsTitleEl) projectsTitleEl.textContent = projects.title;

  const projectsContainerEl = document.getElementById('projects-cards-container');
  if (projectsContainerEl && Array.isArray(projects.list)) {
    projectsContainerEl.innerHTML = projects.list.map((proj, index) => {
      const cardBlendClass = index === 0 ? 'project-card-1' : 'project-card-2';
      const bulletsHtml = proj.bullets
        .map(bullet => `<li class="project-bullet-item">${escapeHtml(bullet)}</li>`)
        .join('');
      const tagsHtml = proj.tags
        .map(tag => `<span class="project-tag">${escapeHtml(tag)}</span>`)
        .join('');

      return `
        <article class="project-card ${cardBlendClass}" data-card-index="${index}">
          <div class="project-header">
            <span class="project-number">${escapeHtml(proj.number)}</span>
            <h3 class="project-title">${escapeHtml(proj.title)}</h3>
          </div>
          <ul class="project-bullets">
            ${bulletsHtml}
          </ul>
          <div class="project-footer">
            <div class="project-tags">
              ${tagsHtml}
            </div>
            <a href="${escapeHtml(proj.url)}" target="_blank" rel="noopener" class="btn btn-project">
              ${escapeHtml(proj.buttonLabel || 'View code')}
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Contact Section
  const contactTitleEl = document.getElementById('contact-title');
  if (contactTitleEl) contactTitleEl.textContent = contact.title;

  const contactEmailLinkEl = document.getElementById('contact-email-link');
  if (contactEmailLinkEl) {
    contactEmailLinkEl.textContent = personal.email;
    contactEmailLinkEl.href = `mailto:${personal.email}`;
  }

  const nameInputEl = document.getElementById('contact-name');
  if (nameInputEl) nameInputEl.placeholder = contact.formNamePlaceholder;

  const msgInputEl = document.getElementById('contact-message');
  if (msgInputEl) msgInputEl.placeholder = contact.formMessagePlaceholder;

  const submitBtnEl = document.getElementById('contact-submit-btn');
  if (submitBtnEl) submitBtnEl.textContent = contact.sendButtonText;

  // Social & Resume Links
  const githubLink = document.getElementById('contact-github');
  if (githubLink) githubLink.href = personal.github;

  const linkedinLink = document.getElementById('contact-linkedin');
  if (linkedinLink) linkedinLink.href = personal.linkedin;

  const resumeLink = document.getElementById('contact-resume');
  if (resumeLink) resumeLink.href = personal.resumeUrl;

  // Footer Links & Info
  const footerNameEl = document.getElementById('footer-name');
  if (footerNameEl) footerNameEl.textContent = personal.name;

  const footerCopyEl = document.getElementById('footer-copyright');
  if (footerCopyEl) footerCopyEl.textContent = contact.copyright;

  const footerGithub = document.getElementById('footer-github');
  if (footerGithub) footerGithub.href = personal.github;

  const footerLinkedin = document.getElementById('footer-linkedin');
  if (footerLinkedin) footerLinkedin.href = personal.linkedin;

  const footerResume = document.getElementById('footer-resume');
  if (footerResume) footerResume.href = personal.resumeUrl;
}

/**
 * Handle Loader display (2s duration, skip on click/key, once per visit)
 */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const HAS_VISITED_KEY = 'aiswaria_portfolio_visited';
  const hasVisited = sessionStorage.getItem(HAS_VISITED_KEY);

  if (hasVisited) {
    // Hide immediately if already visited in this session
    loader.classList.add('loader-hidden');
    loader.style.display = 'none';
    return;
  }

  // Mark session as visited
  sessionStorage.setItem(HAS_VISITED_KEY, 'true');

  let loaderTimer = setTimeout(() => {
    hideLoader();
  }, 2100);

  function hideLoader() {
    clearTimeout(loaderTimer);
    loader.classList.add('loader-hidden');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 700);
  }

  // Skip loader on click or any keypress
  loader.addEventListener('click', hideLoader);
  window.addEventListener('keydown', (e) => {
    if (!loader.classList.contains('loader-hidden')) {
      hideLoader();
    }
  }, { once: true });
}

/**
 * Smooth cursor interaction with LERP easing for Hero Name & Project Cards
 */
function initCursorEffects() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // 1. Hero Name Gradient Fill Lerp
  const heroNameContainer = document.getElementById('hero-name-container');
  const heroNameGlow = document.getElementById('hero-name-glow');

  if (heroNameContainer && heroNameGlow) {
    let targetX = 50;
    let currentX = 50;
    let isHovered = false;
    let animFrameId = null;

    heroNameContainer.addEventListener('mousemove', (e) => {
      const rect = heroNameContainer.getBoundingClientRect();
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      targetX = Math.max(0, Math.min(100, xPercent));
      isHovered = true;

      if (!animFrameId) {
        animFrameId = requestAnimationFrame(updateHeroNameGradient);
      }
    });

    heroNameContainer.addEventListener('mouseleave', () => {
      isHovered = false;
      targetX = 50; // Reset center
    });

    function updateHeroNameGradient() {
      // Linear interpolation (lerp) for smooth easing
      currentX += (targetX - currentX) * 0.08;
      heroNameGlow.style.setProperty('--name-gradient-pos', `${currentX}% 50%`);

      if (Math.abs(targetX - currentX) > 0.1 || isHovered) {
        animFrameId = requestAnimationFrame(updateHeroNameGradient);
      } else {
        animFrameId = null;
      }
    }
  }

  // 2. Project Card Edge Glow Lerp
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card) => {
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;
    let isMoving = false;
    let cardAnimFrameId = null;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      isMoving = true;

      if (!cardAnimFrameId) {
        cardAnimFrameId = requestAnimationFrame(updateCardGlow);
      }
    });

    card.addEventListener('mouseleave', () => {
      isMoving = false;
    });

    function updateCardGlow() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      card.style.setProperty('--card-mouse-x', `${currentX}px`);
      card.style.setProperty('--card-mouse-y', `${currentY}px`);

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5 || isMoving) {
        cardAnimFrameId = requestAnimationFrame(updateCardGlow);
      } else {
        cardAnimFrameId = null;
      }
    }
  });
}

/**
 * Handle Mailto Email Form Submission
 */
function initContactForm(recipientEmail) {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const msgInput = document.getElementById('contact-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const message = msgInput ? msgInput.value.trim() : '';

    if (!name || !message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`);

    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  });
}

/**
 * Utility to escape HTML special characters
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
