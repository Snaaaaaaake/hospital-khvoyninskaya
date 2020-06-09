import '../pages/shedule.css';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import ContrastMode from '../blocks/contrast-mode/ContrastMode';
import ghPagesFix from './utils/ghPagesFix';

const header = new Header();
header.render(document.getElementById('header'));

const contrastMode = new ContrastMode();
contrastMode.render(document.getElementById('contrast-mode'), header.buttonContrastMode, header.mainMenuHandler);

const footer = new Footer();
footer.render(document.getElementById('footer'));

// Фикс адреса для GHPages
ghPagesFix();

// Заголовок таблицы спойлер
document.querySelectorAll('.section__title-clickable').forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.nextElementSibling.classList.toggle('element-disabled');
  });
});

// Расписание отдельных людей спойлер
document.querySelectorAll('.shedule__name:not(.shedule__title)').forEach((name) => {
  if (window.screen.width <= 1499) {
    name.setAttribute('title', 'Показать расписание врача');
  }
  name.addEventListener('click', () => {
    // Показываем дни
    const days = name.nextElementSibling;
    days.classList.toggle('element-grid-enabled');
    // Проверяем название дней
    const firstChild = days.firstElementChild;
    if (firstChild.classList.contains('shedule__title-dynamic')) {
      // Если есть, то удаляем
      firstChild.remove();
    } else {
      // Если нет, то добавляем, пока открыт спойлер
      const title = document.getElementById('shedule__title-template').content.cloneNode(true);
      days.prepend(title);
    }
  });
});
