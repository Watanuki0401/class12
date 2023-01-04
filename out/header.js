const hamBtn = document.querySelector('.header__list');
const menu = document.querySelector('.header__menu');
const links = document.querySelector('.header__links');
const tri = document.querySelector('.triger');

hamBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  links.classList.toggle('active');
  tri.classList.toggle('active');
});

