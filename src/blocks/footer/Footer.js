import spoilerToggleListener from '../../js/utils/spoilerToggleListener';

export default class Footer {
  render() {
    document.querySelectorAll('.footer__list-title').forEach(spoilerToggleListener('footer__list-title_opened'));
  }
}
