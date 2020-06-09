export default function setCookie(key, value) {
  document.cookie = `${key}=${value}; path=/`;
}
