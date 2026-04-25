/* ============================================================
   OUTING — script.js
   ============================================================ */

// ── Scroll Reveal ──────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// Stagger reveals within the same section
document.querySelectorAll('section').forEach(section => {
  const items = section.querySelectorAll('.reveal');
  items.forEach((item, i) => {
    item.style.transitionDelay = (i * 0.1) + 's';
  });
});

// ── Active nav on scroll ───────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? '#f5f3ef'
      : 'rgba(245,243,239,0.65)';
  });
});
