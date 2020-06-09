import '../pages/prophylaxy.css';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import ContrastMode from '../blocks/contrast-mode/ContrastMode';
import ghPagesFix from './utils/ghPagesFix';

const header = new Header();
header.render(document.getElementById('header'));

const contrastMode = new ContrastMode();
contrastMode.render(document.getElementById('contrast-mode'), header.buttonContrastMode, header.mainMenuHandler);
contrastMode.apply();

const footer = new Footer();
footer.render(document.getElementById('footer'));

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

// Фикс адреса для GHPages
ghPagesFix();
