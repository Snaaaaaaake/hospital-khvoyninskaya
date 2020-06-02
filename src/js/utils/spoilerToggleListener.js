export default function spoilerToggleListener(openedMark) {
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
