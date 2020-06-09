import getCookie from './getCookie';

export default function setCookie(key, value) {
  const cookie = getCookie();
  cookie[key] = value;
  const cookieArray = Object.keys(cookie).map((name) => `${name}=${cookie[name]}`);
  document.cookie = cookieArray.join('&');
}
