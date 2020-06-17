import getCookie from '../../js/utils/getCookie';
import setCookie from '../../js/utils/setCookie';

export default class ContrastMode {
  render(parentElement, openButton, additionalListener) {
    // Вешаем обработчики
    // Размер шрифта
    document.querySelector('.contrast-mode__item-content-font_small').addEventListener('click', () => {
      document.body.parentNode.classList.add('small');
      document.body.parentNode.classList.remove('large');
      setCookie('font', 'small');
    });
    document.querySelector('.contrast-mode__item-content-font_large').addEventListener('click', () => {
      document.body.parentNode.classList.remove('small');
      document.body.parentNode.classList.add('large');
      setCookie('font', 'large');
    });
    document.querySelector('.contrast-mode__item-content-font_medium').addEventListener('click', () => {
      document.body.parentNode.classList.remove('small');
      document.body.parentNode.classList.remove('large');
      setCookie('font', 'medium');
    });
    // Выкл изображения
    document.querySelector('.contrast-mode__item-switch-off').addEventListener('click', () => {
      document.querySelectorAll('.element-with-backgroud').forEach((elem) => {
        elem.classList.add('element-background-disabled');
      });
      document.querySelector('.contrast-mode__item-content-switch-off').classList.add('element-disabled');
      document.querySelector('.contrast-mode__item-content-switch-on').classList.remove('element-disabled');
      setCookie('img', 'disabled');
    });
    // Вкл изображения
    document.querySelector('.contrast-mode__item-switch-on').addEventListener('click', () => {
      document.querySelectorAll('.element-with-backgroud').forEach((elem) => {
        elem.classList.remove('element-background-disabled');
      });
      document.querySelector('.contrast-mode__item-content-switch-on').classList.add('element-disabled');
      document.querySelector('.contrast-mode__item-content-switch-off').classList.remove('element-disabled');
      setCookie('img', 'enabled');
    });
    // Скрыть меню
    document.querySelector('.contrast-mode__item-content-big-button-hide').addEventListener('click', () => {
      document.querySelector('.contrast-mode').classList.toggle('element-disabled');
    });
    // Цвет
    document.querySelector('.contrast-mode__item-cube-button-white').addEventListener('click', () => {
      document.body.parentNode.classList.remove('contrast');
      setCookie('mode', 'normal');
    });
    document.querySelector('.contrast-mode__item-cube-button-black').addEventListener('click', () => {
      document.body.parentNode.classList.add('contrast');
      setCookie('mode', 'contrast');
    });
    // Показать меню
    openButton.addEventListener('click', () => {
      document.querySelector('.contrast-mode').classList.toggle('element-disabled');
      if (window.screen.width <= 424 && additionalListener) {
        // При малом разрешении чтобы открыть меню доп возможностей, основное меню надо скрыть
        additionalListener();
      }
    });
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
