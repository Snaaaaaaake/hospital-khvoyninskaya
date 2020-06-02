import '../pages/main.css';
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
