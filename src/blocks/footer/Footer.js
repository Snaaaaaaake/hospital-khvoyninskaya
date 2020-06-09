import spoilerToggleListener from '../../js/utils/spoilerToggleListener';

export default class Footer {
  constructor() {
    this._element = document.createElement('div');
    this._element.classList.add('footer');
    this._element.classList.add('element-gray');
    this._element.insertAdjacentHTML('afterbegin', `
      <h5 class="footer__title">Хвойнинская ЦРБ</h5>
      <nav class="footer__menu">
        <ul class="list list_unmarked footer__container footer__list-item-container">
          <li class="list__item footer__list-item-container">
            <p class="list__title footer__list-title">КОНТАКТЫ</p>
            <ul class="footer__container-list list list_unmarked">
              <li class="list__item">
                <a href="/contacts" class="list__link">Контакты больницы</a>
              </li>
              <li class="list__item">
                <a href="/vacancy" class="list__link">Вакансии</a>
              </li>
            </ul>
          </li>
          <li class="list__item footer__list-item-container">
            <p class="list__title footer__list-title">ПАЦИЕНТАМ</p>
            <ul class="footer__container-list list list_unmarked">
              <li class="list__item">
                <a href="/shedule" class="list__link">Расписание</a>
              </li>
              <li class="list__item">
                <a href="/activities" class="list__link">Основные виды деятельности</a>
              </li>
              <li class="list__item">
                <a href="/prophylaxy" class="list__link">Профилактика</a>
              </li>
              <li class="list__item">
                <a href="#" class="list__link">ГОСУСЛУГИ запись на прием</a>
              </li>
              <li class="list__item">
                <a href="/writetous" class="list__link">Написать нам</a>
              </li>
              <li class="list__item">
                <a href="#" class="list__link">Прочая информация</a>
              </li>
            </ul>
          </li>
          <li class="list__item footer__list-item-container">
            <a href="/paidservices" class="list__title list__item footer__list-title">ПЛАТНЫЕ УСЛУГИ</a>
          </li>
          <li class="list__item footer__list-item-container">
            <a href="/about" class="list__title list__item footer__list-title">О НАС</a>
          </li>
          <li class="list__item footer__list-item-container">
            <p class="list__title list__item footer__list-title">ПРОТИВО&shy;ДЕЙСТВИЕ КОРРУПЦИИ</p>
            <ul class="footer__container-list list list_unmarked">
              <li class="list__item">
                <a href="/corruption" class="list__link">Комиссия по противодействию коррупции</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    `);
  }

  render(parentElement) {
    this._element.querySelectorAll('.footer__list-title').forEach(spoilerToggleListener('footer__list-title_opened'));
    parentElement.appendChild(this._element);
  }
}
