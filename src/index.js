import { Cart } from "./controllers/cart.js";
import { Filter } from "./controllers/filters.js";
import { CreateListProduct } from "./controllers/CreateListProductsController.js";
import { ListProducts } from "./controllers/ListProductsController.js";
import { ProductRouter } from "./router/router.js";

const products = JSON.parse(localStorage.getItem("products"));

if (JSON.parse(localStorage.getItem("cart")).length >= 1) {
    const sectionCart = document.querySelector(".cart-body");
    sectionCart.innerHTML = "";
    Cart.footerValues();
    for (const i in JSON.parse(localStorage.cart)) {
        Cart.cartModel(i);
    }
} else {
    localStorage.setItem("cart", JSON.stringify([]));
}

ListProducts.consumeApi();

products.forEach((product) => {
    CreateListProduct.createTemplateProduct(product);
});

const buttons = Array.from(document.querySelectorAll(".button-menu"));
const inputSearch = document.querySelector(".search-label__input");
const buttonsCart = document.querySelectorAll(".addcart-button");

buttons[0].addEventListener("click", Filter.buttonAll);
buttons.forEach((button, index) => {
    if (index > 0 && index < 4) {
        button.addEventListener("click", Filter.byButton);
    }
});
buttons[4].addEventListener("click", Filter.byLowerPrice);
buttons[5].addEventListener("click", Filter.byHigherPrice);

inputSearch.addEventListener("input", Filter.byInput);

buttonsCart.forEach((item) => {
    item.addEventListener("click", Cart.setCartProducts);
});