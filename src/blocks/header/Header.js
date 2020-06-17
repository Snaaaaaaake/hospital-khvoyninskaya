import spoilerToggleListener from '../../js/utils/spoilerToggleListener';

export default class Header {
  constructor() {
    this.buttonContrastMode = document.querySelector('.header__button-contrast-mode');
    this.mainMenuHandler = this.mainMenuHandler.bind(this);
  }

  render() {
    // Расставляем обработчики
    document.querySelector('.header__button-main-menu').addEventListener('click', this.mainMenuHandler);
    document.querySelector('.overlay').addEventListener('click', this.mainMenuHandler);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.mainMenuHandler();
      }
    });
    document.querySelectorAll('.header__main-menu-list-title').forEach(spoilerToggleListener('header__main-menu-list-title_opened'));

    // Фикс главного меню
    window.onload = () => {
      document.querySelector('.header__main-menu').classList.toggle('element-disabled');
    };
  }

  // Меню главное открытие
  mainMenuHandler() {
    document.querySelector('.header__main-menu').classList.toggle('header__main-menu_hidden');
    document.querySelector('.header__main-menu').classList.toggle('element-on-top');
    document.querySelector('.header__button-main-menu').classList.toggle('element-orange');
    document.querySelector('.header__left-container').classList.toggle('element-orange');
    document.querySelector('.header__left-container').classList.toggle('element-on-top');
    document.querySelector('.overlay').classList.toggle('element-disabled');
    if (window.screen.width <= 424) {
      document.querySelector('.header__right-container').classList.toggle('element-on-top');
      document.querySelector('.header__button-search').classList.toggle('element-disabled');
      document.querySelector('.header__contrast-mode').classList.toggle('element-enabled');
    }
  }
}
