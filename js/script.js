// Highlights the nav link for the section currently in view.
const sections = document.querySelectorAll('main .section[id]');
const navLinks = document.querySelectorAll('.site-nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach((section) => observer.observe(section));
