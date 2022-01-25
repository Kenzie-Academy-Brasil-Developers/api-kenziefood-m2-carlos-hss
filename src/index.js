import { Cart } from "./controllers/cart.js";
import { Filter } from "./controllers/filters.js";
import { CreateListProduct } from "./controllers/CreateListProductsController.js";
import { ListProducts } from "./controllers/ListProductsController.js";

const buttons = document.querySelectorAll(".button-menu")

ListProducts.consumeApi()

let itens = JSON.parse(localStorage.getItem("products"))
itens.forEach((item) => {
    CreateListProduct.createTemplateProduct(item)
});
console.log(buttons)

buttons[0].addEventListener('click', Filter.buttonAll)
buttons[1].addEventListener('click', Filter.byButton)