import { getCookie } from "./cookie.js";

function authHandler() {
  if (
    (getCookie() && location.href.includes("auth")) ||
    (!getCookie() && location.href.includes("dashboard"))
  ) {
    location.assign("index.html");
  }
}

export { authHandler };
