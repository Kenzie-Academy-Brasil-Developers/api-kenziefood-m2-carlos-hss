// START IMPORTS
import { Cart } from "./controllers/cart.js";
import { Filter } from "./controllers/filters.js";
import { CreateListProduct } from "./controllers/CreateListProductsController.js";
import { ListProducts } from "./controllers/ListProductsController.js";
// END IMPORTS

// START GLOBAL VARIABLES
const buttons = Array.from(document.querySelectorAll(".button-menu"));
const inputSearch = document.querySelector(".search-label__input");
const products = JSON.parse(localStorage.getItem("products"));
// END GLOBAL VARIABLES

// START APPLICATION
ListProducts.consumeApi();

products.forEach((product) => {
  CreateListProduct.createTemplateProduct(product);
});
// END APPLICATION

// START EVENT LISTENERS
buttons[0].addEventListener("click", Filter.buttonAll);

buttons.forEach((button, index) => {
  if (index > 0 && index < 4) {
    button.addEventListener("click", Filter.byButton);
  }
});

buttons[4].addEventListener("click", Filter.byLowerPrice);

buttons[5].addEventListener("click", Filter.byHigherPrice);

inputSearch.addEventListener("input", Filter.byInput);
// END EVENT LISTENERS
