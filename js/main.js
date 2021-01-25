const header = document.querySelector('header');
const menuBtn = header.querySelector('.menu-btn');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    if (header.classList.contains('menu-open')) {
      header.classList.remove('menu-open');
    } else {
      header.classList.add('menu-open');
    }
  });
}
