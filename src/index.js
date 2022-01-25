import { Cart } from "./controllers/cart.js";
import { Filter } from "./controllers/filters.js";
import { CreateListProduct } from "./controllers/CreateListProductsController.js";
import { ListProducts } from "./controllers/ListProductsController.js";

const buttons = document.querySelectorAll(".button-menu");

const inputSearch = document.querySelector(".search-label__input");

ListProducts.consumeApi();

let itens = JSON.parse(localStorage.getItem("products"));

itens.forEach((item) => {
  CreateListProduct.createTemplateProduct(item);
});

buttons[0].addEventListener("click", Filter.buttonAll);

Array.from(buttons).forEach((item, index) => {
  if (index !== 0) {
    item.addEventListener("click", Filter.byButton);
  }
});

inputSearch.addEventListener("input", Filter.byInput);
