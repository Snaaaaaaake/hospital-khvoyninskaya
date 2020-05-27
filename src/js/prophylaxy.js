import '../pages/prophylaxy.css';

// Таблицы спойлеры
document.querySelectorAll('.grid_clickable .grid__title').forEach((item) => {
  const gridHeader = item.parentElement.previousElementSibling.cloneNode(true);
  gridHeader.classList.add('grid_low-res');
  item.after(gridHeader);
  item.setAttribute('title', 'Скрыть/показать');
  item.addEventListener('click', () => {
    item.classList.toggle('grid__title_opened');
    item.nextElementSibling.classList.toggle('element-enabled');
    item.nextElementSibling.nextElementSibling.classList.toggle('element-grid-enabled');
  });
});

document.querySelectorAll('.grid__help-title').forEach((item) => {
  item.setAttribute('title', 'Скрыть/показать');
  item.addEventListener('click', () => {
    item.classList.toggle('grid__title_opened');
    item.nextElementSibling.classList.toggle('element-grid-enabled');
  });
});


// Меню главное открытие
function mainMenuHandler() {
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

document.querySelector('.header__button-main-menu').addEventListener('click', mainMenuHandler);
document.querySelector('.overlay').addEventListener('click', mainMenuHandler);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    mainMenuHandler();
  }
});

// Меню специальные возможности
document.querySelector('.header__contrast-mode').addEventListener('click', () => {
  document.querySelector('.contrast-mode').classList.toggle('element-disabled');
  if (window.screen.width <= 424) {
    mainMenuHandler();
  }
});
document.querySelector('.contrast-mode__item-content-big-button-hide').addEventListener('click', () => {
  document.querySelector('.contrast-mode').classList.toggle('element-disabled');
});

document.querySelector('.contrast-mode__item-cube-button-white').addEventListener('click', () => {
  document.body.parentNode.classList.remove('contrast');
  document.cookie = 'mode=normal';
});
document.querySelector('.contrast-mode__item-cube-button-black').addEventListener('click', () => {
  document.body.parentNode.classList.add('contrast');
  document.cookie = 'mode=special';
});

// Меню все
function spoilerToggleListener(openedMark) {
  return (listTitle) => {
    listTitle.addEventListener('click', () => {
      const list = listTitle.nextElementSibling;
      if (list) {
        listTitle.classList.toggle(openedMark);
        list.classList.toggle('element-enabled');
      }
    });
  };
}
// Меню футер
document.querySelectorAll('.footer__list-title').forEach(spoilerToggleListener('footer__list-title_opened'));

// Меню главное
document.querySelectorAll('.header__main-menu-list-title').forEach(spoilerToggleListener('header__main-menu-list-title_opened'));

// Фикс главного меню
window.onload = () => {
  document.querySelector('.header__main-menu').classList.toggle('element-disabled');
};

// Специальные возможности загрузка
if (/mode=special/.test(document.cookie)) {
  document.body.parentNode.classList.add('contrast');
}

// Фикс адреса для GHPages
if (/github/.test(document.location.host)) {
  const homePage = '/hospital-khvoyninskaya';
  document.querySelectorAll('.script-link').forEach((item) => {
    const href = item.getAttribute('href');
    item.setAttribute('href', homePage + href);
  });
}
