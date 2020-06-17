import '../pages/prophylaxy.css';
import ghPagesFix from './utils/ghPagesFix';
import renderTemplates from './utils/rednerTemplates';

renderTemplates();
ghPagesFix();

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
