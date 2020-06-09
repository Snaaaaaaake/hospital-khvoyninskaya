import getCookie from '../../js/utils/getCookie';
import setCookie from '../../js/utils/setCookie';

export default class ContrastMode {
  constructor() {
    this._element = document.createElement('div');
    this._element.classList.add('contrast-mode');
    this._element.classList.add('element-disabled');
    this._element.insertAdjacentHTML('afterbegin', `
      <div class="contrast-mode__item">
        <div class="contrast-mode__item-text">Размер<br>шрифта</div>
        <div class="contrast-mode__item-content">
          <div class="contrast-mode__item-content-font contrast-mode__item-content-font_small" title="Маленький шрифт">A</div>
          <div class="contrast-mode__item-content-font contrast-mode__item-content-font_medium" title="Обычный шрифт">A</div>
          <div class="contrast-mode__item-content-font contrast-mode__item-content-font_large" title="Большой шрифт">A</div>
        </div>
      </div>
      <div class="contrast-mode__item">
        <div class="contrast-mode__item-text">Цвет<br>сайта</div>
        <div class="contrast-mode__item-content">
          <div class="contrast-mode__item-cube contrast-mode__item-cube-button-white" title="Стандартный стиль"></div>
          <div class="contrast-mode__item-cube contrast-mode__item-cube-button-black contrast-mode__item-cube_dark" title="Контрастный стиль"></div>
        </div>
      </div>
      <div class="contrast-mode__item">
        <div class="contrast-mode__item-text">Изображения</div>
        <div class="contrast-mode__item-content contrast-mode__item-content-switch-off">
          <div class="contrast-mode__item-switch contrast-mode__item-cube_dark"></div>
          <div class="contrast-mode__item-switch contrast-mode__item-switch-button contrast-mode__item-switch-off">ВЫКЛ</div>
        </div>
        <div class="contrast-mode__item-content contrast-mode__item-content-switch-on element-disabled">
          <div class="contrast-mode__item-switch contrast-mode__item-switch-button contrast-mode__item-switch-on">ВКЛ</div>
          <div class="contrast-mode__item-switch contrast-mode__item-cube_dark"></div>
        </div>
      </div>
      <div class="contrast-mode__item">
        <div class="contrast-mode__item-content">
          <button class="contrast-mode__item-text contrast-mode__item-content-big-button contrast-mode__item-content-big-button-hide" title="Скрыть меню">Скрыть<br>меню</button>
        </div>
      </div>
    `);
  }

  render(parentElement, openButton, additionalListener) {
    // Вешаем обработчики
    // Размер шрифта
    this._element.querySelector('.contrast-mode__item-content-font_small').addEventListener('click', () => {
      document.body.parentNode.classList.add('small');
      document.body.parentNode.classList.remove('large');
      setCookie('font', 'small');
    });
    this._element.querySelector('.contrast-mode__item-content-font_large').addEventListener('click', () => {
      document.body.parentNode.classList.remove('small');
      document.body.parentNode.classList.add('large');
      setCookie('font', 'large');
    });
    this._element.querySelector('.contrast-mode__item-content-font_medium').addEventListener('click', () => {
      document.body.parentNode.classList.remove('small');
      document.body.parentNode.classList.remove('large');
      setCookie('font', 'medium');
    });
    // Выкл изображения
    this._element.querySelector('.contrast-mode__item-switch-off').addEventListener('click', () => {
      document.querySelectorAll('.element-with-backgroud').forEach((elem) => {
        elem.classList.add('element-background-disabled');
      });
      document.querySelector('.contrast-mode__item-content-switch-off').classList.add('element-disabled');
      document.querySelector('.contrast-mode__item-content-switch-on').classList.remove('element-disabled');
      setCookie('img', 'disabled');
    });
    // Вкл изображения
    this._element.querySelector('.contrast-mode__item-switch-on').addEventListener('click', () => {
      document.querySelectorAll('.element-with-backgroud').forEach((elem) => {
        elem.classList.remove('element-background-disabled');
      });
      document.querySelector('.contrast-mode__item-content-switch-on').classList.add('element-disabled');
      document.querySelector('.contrast-mode__item-content-switch-off').classList.remove('element-disabled');
      setCookie('img', 'enabled');
    });
    // Скрыть меню
    this._element.querySelector('.contrast-mode__item-content-big-button-hide').addEventListener('click', () => {
      this._element.classList.toggle('element-disabled');
    });
    // Цвет
    this._element.querySelector('.contrast-mode__item-cube-button-white').addEventListener('click', () => {
      document.body.parentNode.classList.remove('contrast');
      setCookie('mode', 'normal');
    });
    this._element.querySelector('.contrast-mode__item-cube-button-black').addEventListener('click', () => {
      document.body.parentNode.classList.add('contrast');
      setCookie('mode', 'contrast');
    });
    // Показать меню
    openButton.addEventListener('click', () => {
      this._element.classList.toggle('element-disabled');
      if (window.screen.width <= 424 && additionalListener) {
        // При малом разрешении чтобы открыть меню доп возможностей, основное меню надо скрыть
        additionalListener();
      }
    });

    // Добавляем элемент в документ
    parentElement.appendChild(this._element);
  }

  // Специальные возможности применение
  apply() {
    const cookie = getCookie();
    if (cookie.mode) {
      document.body.parentNode.classList.add(cookie.mode);
    }
    if (cookie.font) {
      document.body.parentNode.classList.add(cookie.font);
    }
    if (cookie.img === 'enabled' || !cookie.img) {
      document.querySelectorAll('.element-with-backgroud').forEach((elem) => {
        // По умолчанию изоюражения всегда выключены
        elem.classList.remove('element-background-disabled');
      });
    } else {
      document.querySelector('.contrast-mode__item-content-switch-off').classList.add('element-disabled');
      document.querySelector('.contrast-mode__item-content-switch-on').classList.remove('element-disabled');
    }
  }
}
