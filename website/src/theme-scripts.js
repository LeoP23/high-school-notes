if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'dyslexia-toggle') {
      const isEnabled = document.documentElement.getAttribute('data-dyslexia-mode') === 'true';
      document.documentElement.setAttribute('data-dyslexia-mode', !isEnabled);
    }
  });
}