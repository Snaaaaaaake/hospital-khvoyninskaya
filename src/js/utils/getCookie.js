export default function getCookie() {
  const cookieArray = document.cookie.split('&');
  const cookieObject = {};
  cookieArray.forEach((item) => {
    const [key, value] = item.split('=');
    cookieObject[key] = value;
  });
  return cookieObject;
}
