import { ListProducts } from "./ListProductsController.js";

class Filter {

    static
    byButton(evt) {
        let array = JSON.parse(localStorage.products).filter(value => value.category === evt.target.value)
        localStorage.products = JSON.stringify(array);
    }

    static
    byInput(evt) {
        const input = evt.target.closest("input");

        localStorage.products = JSON.stringify(array.filter(value => value.categoria === input.value ||
            value.nome === input.value ||
            value.id === input.value));
    }

    static
    buttonAll() {
        ListProducts.consumeApi();
    }

    static
    byPriceToHigh() {
        let local = JSON.parse(localStorage.getItem("products"))
        local = local.sort((a, b) => a.preco - b.preco)

        localStorage.products = JSON.stringify(local)
    }

    static
    byPriceToLower() {
        let local = JSON.parse(localStorage.getItem("products"))
        local = local.sort((a, b) => b.preco - a.preco)

        localStorage.products = JSON.stringify(local)
    }

}

export { Filter }