import { getCookie } from "../utils/cookie.js";
import { getData } from "../utils/httpReq.js";
import { shorterText } from "../utils/string.js";

let allProducts = null; // null is better than undefined
let searchInput = "";
let category = "all";

const loginButton = document.querySelector("#login-button");
const dashboardButton = document.querySelector("#dashboard-button");
const productDiv = document.querySelector("#products");
const searchButton = document.querySelector("#search-button");
const searchBox = document.querySelector("#search-box");
const listItems = document.querySelectorAll("li");

async function init() {
  if (getCookie()) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }
  allProducts = await getData("/products");
  showProducts(allProducts);
}

function showProducts(products) {
  productDiv.innerHTML = "";
  products.forEach((product) => {
    productDiv.innerHTML += `
        <div>
            <img alt=${product.title} src=${product.image} />
            <h4>${shorterText(product.title)}</h4>
            <div id="price">
                <p>$ ${product.price}</p>
                <button>
                    Buy
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            <div id="rate">
                <i class="fa-solid fa-star"></i>
                <span>${product.rating.rate}</span>
            </div>
            <div id="count">
                <i class="fa-solid fa-user"></i>
                <span>${product.rating.count}</span>
            </div>
        </div>
    `;
  });
}

function searchHandler() {
  searchInput = searchBox.value.trim().toLowerCase();
  filterProducts();
}

function categoriesHandler(event) {
  category = event.target.innerText.toLowerCase();
  listItems.forEach((li) => {
    if (li.innerText == category) {
      li.className = "selected";
    } else {
      li.className = "";
    }
  });
  filterProducts();
}

function filterProducts() {
  // Very Important function
  let filteredProducts = null;
  filteredProducts = allProducts.filter((product) => {
    if (category == "all") {
      return product.title.toLowerCase().includes(searchInput);
    } else {
      return (
        product.title.toLowerCase().includes(searchInput) &&
        product.category.toLowerCase() == category
      );
    }
  });
  showProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
listItems.forEach((list) => list.addEventListener("click", categoriesHandler));
