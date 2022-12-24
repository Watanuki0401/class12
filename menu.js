const hamBtn = document.querySelector('.menuBar__list');
const menu = document.querySelector('.menuBar__menu');
const links = document.querySelector('.menuBar__links');

hamBtn.addEventListener('click', () =>{
  menu.classList.toggle('active');
  links.classList.toggle('active');
});

window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}
