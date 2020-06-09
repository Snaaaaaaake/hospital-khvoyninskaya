export default function ghPagesFix() {
  if (/github/.test(document.location.host)) {
    const homePage = '/hospital-khvoyninskaya';
    document.querySelectorAll('a[href^="/"]').forEach((item) => {
      const href = item.getAttribute('href');
      item.setAttribute('href', homePage + href);
    });
  }
}
