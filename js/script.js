document.addEventListener('DOMContentLoaded', () => {
  const cookieBox = document.getElementById('cookie-consent');
  const cookieAccept = document.getElementById('cookie-accept');

  if (localStorage.getItem('noirvoid_cookie_ok') === '1' && cookieBox) {
    cookieBox.style.display = 'none';
  }

  if (cookieAccept && cookieBox) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('noirvoid_cookie_ok', '1');
      cookieBox.style.display = 'none';
    });
  }
});
