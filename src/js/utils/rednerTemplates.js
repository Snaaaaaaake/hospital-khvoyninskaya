import Header from '../../blocks/header/Header';
import Footer from '../../blocks/footer/Footer';
import ContrastMode from '../../blocks/contrast-mode/ContrastMode';

export default function renderTemplates() {
  const header = new Header();
  header.render();

  const contrastMode = new ContrastMode();
  contrastMode.render(header.buttonContrastMode, header.mainMenuHandler);
  contrastMode.apply();

  const footer = new Footer();
  footer.render();
}
