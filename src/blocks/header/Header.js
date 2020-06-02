import spoilerToggleListener from '../../js/utils/spoilerToggleListener';

export default class Header {
  constructor() {
    this._element = document.createElement('div');
    this._element.classList.add('header');
    this._element.insertAdjacentHTML('afterbegin', `
      <nav class="header__main-menu element-orange header__main-menu_hidden element-disabled">
        <div class="header__main-menu-container">
          <ul class="header__main-menu-list list list_unmarked">
            <li class="header__main-menu-list-item list__item">
              <p class="list__title header__main-menu-list-title header__main-menu-list-element">ПАЦИЕНТАМ</p>
              <ul class="header__main-menu-second-list list list_unmarked">
                <li class="list__item">
                  <a href="#" class="list__link header__main-menu-list-element">Расписание</a>
                </li>
                <li class="list__item">
                  <a href="#" class="list__link header__main-menu-list-element">Основные виды деятельности</a>
                </li>
                <li class="list__item">
                  <a href="/prophylaxy" class="script-link list__link header__main-menu-list-element">Профилактика</a>
                </li>
                <li class="list__item">
                  <a href="#" class="list__link header__main-menu-list-element">Запись на прием</a>
                </li>
                <li class="list__item">
                  <a href="#" class="list__link header__main-menu-list-element">ГОСУСЛУГИ запись на прием</a>
                </li>
                <li class="list__item">
                  <a href="#" class="list__link header__main-menu-list-element">Написать нам</a>
                </li>
                <li class="list__item">
                  <a href="#" class="list__link header__main-menu-list-element">Прочая информация</a>
                </li>
              </ul>
            </li>
            <li class="header__main-menu-list-item list__item">
              <a href="#" class="list__title header__main-menu-list-title header__main-menu-list-element">ПЛАТНЫЕ УСЛУГИ</a>
            </li>
            <li class="header__main-menu-list-item list__item">
              <a href="/about" class=" script-link list__title header__main-menu-list-title header__main-menu-list-element">О НАС</a>
            </li>
            <li class="header__main-menu-list-item list__item">
              <p class="list__title header__main-menu-list-title header__main-menu-list-element">ПРОТИВО&shy;КОРУПЦИОННЫЕ<br>ДЕЙСТВИЯ</p>
              <ul class="header__main-menu-second-list list list_unmarked">
                <li class="list__item">
                  <a href="#" class="list__link header__main-menu-list-element">Комиссия по противодействию коррупции</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div class="header__container header__left-container">
        <div class="header__button-main-menu header__button"></div>
        <a href="/" class="script-link header__logo" title="Главная страница">Хвойнинская ЦРБ</a>
      </div>
      <div class="header__container header__right-container">
        <div class="header__contrast-mode" title="Версия для слабовидящих">
          <div class="header__contrast-mode-help">
            Версия<br>
            для<br>
            слабовидящих
          </div>
          <div class="header__button header__button-contrast-mode"></div>
        </div>
        <form class="header__search">
          <div class="header__search-container">
            <input type="text" class="header__search-input">
          </div>
          <button class="header__button header__button-search" type="submit"></button>
        </form>
      </div>
    `);
    this.buttonContrastMode = this._element.querySelector('.header__button-contrast-mode');
    this.mainMenuHandler = this.mainMenuHandler.bind(this);
  }

  render(parentElement) {
    // Расставляем обработчики
    this._element.querySelector('.header__button-main-menu').addEventListener('click', this.mainMenuHandler);
    document.querySelector('.overlay').addEventListener('click', this.mainMenuHandler);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.mainMenuHandler();
      }
    });
    this._element.querySelectorAll('.header__main-menu-list-title').forEach(spoilerToggleListener('header__main-menu-list-title_opened'));
    // Добавляем элемент на страницу
    parentElement.appendChild(this._element);

    // Фикс главного меню
    window.onload = () => {
      document.querySelector('.header__main-menu').classList.toggle('element-disabled');
    };
  }

  // Меню главное открытие
  mainMenuHandler() {
    this._element.querySelector('.header__main-menu').classList.toggle('header__main-menu_hidden');
    this._element.querySelector('.header__main-menu').classList.toggle('element-on-top');
    this._element.querySelector('.header__button-main-menu').classList.toggle('element-orange');
    this._element.querySelector('.header__left-container').classList.toggle('element-orange');
    this._element.querySelector('.header__left-container').classList.toggle('element-on-top');
    document.querySelector('.overlay').classList.toggle('element-disabled');
    if (window.screen.width <= 424) {
      this._element.querySelector('.header__right-container').classList.toggle('element-on-top');
      this._element.querySelector('.header__button-search').classList.toggle('element-disabled');
      this._element.querySelector('.header__contrast-mode').classList.toggle('element-enabled');
    }
  }
}
