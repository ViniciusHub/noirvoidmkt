document.addEventListener('DOMContentLoaded', () => {
  const cookie = document.querySelector('.fixed.bottom-0 button');
  const bar = cookie?.closest('.fixed.bottom-0');
  cookie?.addEventListener('click', () => bar?.remove());
});
