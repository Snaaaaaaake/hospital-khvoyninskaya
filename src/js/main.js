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

function mainMenuHandler() {
  document.querySelector('.header__main-menu').classList.toggle('header__main-menu_hidden');
  document.querySelector('.header__main-menu').classList.toggle('element_on-top');
  document.querySelector('.header__main-menu_button').classList.toggle('element_orange');
  document.querySelector('.header__container_left').classList.toggle('element_orange');
  document.querySelector('.header__container_left').classList.toggle('element_on-top');
  document.querySelector('.overlay').classList.toggle('element_disabled');
}

document.querySelector('.header__main-menu_button').addEventListener('click', mainMenuHandler);
document.querySelector('.overlay').addEventListener('click', mainMenuHandler);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    mainMenuHandler();
  }
});

window.onload = () => {
  document.querySelector('.header__main-menu').classList.toggle('element_disabled');
};
