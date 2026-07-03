// MusicDeals — landing page interactions

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waitlist-form');
  const success = document.getElementById('waitlist-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('email');
      if (!email.value || !email.checkValidity()) {
        email.focus();
        return;
      }

      // NOTE: no backend is wired up yet — this simply confirms the
      // signup in the UI. Replace this block with a real request to
      // your waitlist endpoint (e.g. fetch('/api/waitlist', {...}))
      // once one exists.
      form.hidden = true;
      success.hidden = false;
      success.focus?.();
    });
  }

  // Reveal sections gently as they enter the viewport
  const revealTargets = document.querySelectorAll(
    '.problem__card, .track__row, .trust__inner, .musicians__inner'
  );

  if ('IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach((el) => observer.observe(el));
  }
});