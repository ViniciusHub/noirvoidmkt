document.addEventListener('click', function (event) {
  const target = event.target.closest('[data-scroll-top]');
  if (target) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

const cookieBar = document.querySelector('.fixed.bottom-0');
const cookieButton = cookieBar?.querySelector('button');
cookieButton?.addEventListener('click', () => {
  cookieBar.style.display = 'none';
});
