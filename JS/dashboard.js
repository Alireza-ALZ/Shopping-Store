import { authHandler } from "../utils/authorization.js";
import { getData } from "../utils/httpReq.js";
import { deleteCookie } from "../utils/cookie.js";

const mainContent = document.querySelector("#container");
const loginButton = document.querySelector("#logout-button");

async function showUsers() {
  const allUsers = await getData("/users");
  mainContent.innerHTML = "";
  allUsers.forEach((user) => {
    mainContent.innerHTML += `
        <div id="card">
            <h3>${user.id}</h3>
            <div>
                <p><i class="fa-solid fa-user"></i>Name : </p>
                <span>${user.name.firstname} ${user.name.lastname}</span>
            </div>
            <div>
                <p><i class="fa-solid fa-paperclip"></i>Username : </p>
                <span>${user.username}</span>
            </div>
            <div>
                <p><i class="fa-solid fa-envelope"></i>Email : </p>
                <span>${user.email}</span>
            </div>
            <div>
                <p><i class="fa-solid fa-phone"></i>Phone : </p>
                <span>${user.phone}</span>
            </div>
            <div>
                <p><i class="fa-solid fa-lovation-dot"></i>Address : </p>
                <span>${user.address.city} - ${user.address.street} - ${user.address.zipcode}</span>
            </div>
        </div>
    `;
  });
}
function logoutHandler() {
  location.assign("index.html");
  deleteCookie();
}

document.addEventListener("DOMContentLoaded", authHandler);
document.addEventListener("DOMContentLoaded", showUsers);
loginButton.addEventListener("click", logoutHandler);
