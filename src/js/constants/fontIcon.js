const color = getComputedStyle(document.body.parentNode).getPropertyValue('--color-primary-text');
const elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
elem.setAttribute('class', 'contrast-mode__item_content_font_icon');
const content = document.createElementNS('http://www.w3.org/2000/svg', 'path');
content.setAttribute('d', 'M10.6357 15L9.5957 11.6H4.3957L3.3557 15H0.0957031L5.1357 0.66H8.8357L13.8957 15H10.6357ZM8.8757 9.06L7.8357 5.74C7.76904 5.51333 7.68237 5.22667 7.5757 4.88C7.46904 4.53333 7.36237 4.18 7.2557 3.82C7.14904 3.46 7.06237 3.14667 6.9957 2.88C6.92904 3.14667 6.8357 3.48 6.7157 3.88C6.60904 4.26667 6.50237 4.64 6.3957 5C6.30237 5.34667 6.22904 5.59333 6.1757 5.74L5.1557 9.06H8.8757Z');
content.setAttribute('fill', color);
elem.appendChild(content);
export default elem;
