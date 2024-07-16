function setCookies(token) {
  document.cookie = `token=${token}; max-age=${24 * 60 * 60};path=/`; // path => cookie will be available in all pages
}

function getCookie() {
  const allCookies = document.cookie;
  if (allCookies) {
    const cookieArray = allCookies.split("=");
    return {
      [cookieArray[0]]: cookieArray[1],
    };
  } else {
    return false;
  }
}

function deleteCookie() {
  document.cookie = `token=; max-age=0`;
}

export { setCookies, getCookie, deleteCookie };
