import { postData } from "../utils/httpReq.js";
import { authHandler } from "../utils/authorization.js";
import { setCookies } from "../utils/cookie.js";
import { validateUsername } from "../utils/validation.js";

const inputs = document.querySelectorAll("input");
const loginButton = document.querySelector("#login-button");

async function loginHandler(event) {
  event.preventDefault();
  if (validateUsername(inputs[0].value, /^\w{8,16}$/)) {
    const token = await postData(
      { username: inputs[0].value, password: inputs[1].value },
      "/auth/login"
    );
    setCookies(token.token);
    location.assign("index.html");
  } else {
    alert("Invalid username !");
  }
}

loginButton.addEventListener("click", loginHandler);
document.addEventListener("DOMContentLoaded", authHandler);
