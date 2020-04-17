import '../pages/main.css';

document.querySelector('.header__contrast-mode').addEventListener('click', () => {
  document.querySelector('.contrast-mode').classList.toggle('element_disabled');
});

document.querySelector('.contrast-mode__item_cube_button-white').addEventListener('click', () => {
  document.body.parentNode.classList.remove('contrast');
});

document.querySelector('.contrast-mode__item_cube_button-black').addEventListener('click', () => {
  document.body.parentNode.classList.add('contrast');
});
