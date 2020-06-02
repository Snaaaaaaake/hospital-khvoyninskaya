export default class ContrastMode {
  constructor() {
    this._element = document.createElement('div');
    this._element.classList.add('contrast-mode');
    this._element.classList.add('element-disabled');
    this._element.insertAdjacentHTML('afterbegin', `
      <div class="contrast-mode__item">
        <div class="contrast-mode__item-text">Размер<br>шрифта</div>
        <div class="contrast-mode__item-content">
          <div class="contrast-mode__item-content-font contrast-mode__item-content-font_small">A</div>
          <div class="contrast-mode__item-content-font contrast-mode__item-content-font_medium">A</div>
          <div class="contrast-mode__item-content-font contrast-mode__item-content-font_large">A</div>
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
        <div class="contrast-mode__item-content">
          <div class="contrast-mode__item-switch contrast-mode__item-cube_dark"></div>
          <div class="contrast-mode__item-switch">ВЫКЛ</div>
        </div>
      </div>
      <div class="contrast-mode__item">
        <div class="contrast-mode__item-content">
          <button class="contrast-mode__item-text contrast-mode__item-content-big-button contrast-mode__item-content-big-button-hide">Скрыть<br>меню</button>
        </div>
      </div>
    `);
  }

  render(parentElement, openButton, additionalListener) {
    this._element.querySelector('.contrast-mode__item-content-big-button-hide').addEventListener('click', () => {
      this._element.classList.toggle('element-disabled');
    });
    this._element.querySelector('.contrast-mode__item-cube-button-white').addEventListener('click', () => {
      document.body.parentNode.classList.remove('contrast');
      document.cookie = 'mode=normal';
    });
    this._element.querySelector('.contrast-mode__item-cube-button-black').addEventListener('click', () => {
      document.body.parentNode.classList.add('contrast');
      document.cookie = 'mode=special';
    });
    openButton.addEventListener('click', () => {
      this._element.classList.toggle('element-disabled');
      if (window.screen.width <= 424 && additionalListener) {
        // При малом разрешении чтобы открыть меню доп возможностей, основное меню надо скрыть
        additionalListener();
      }
    });
    parentElement.appendChild(this._element);

    // Специальные возможности загрузка
    if (/mode=special/.test(document.cookie)) {
      document.body.parentNode.classList.add('contrast');
    }
  }
}
