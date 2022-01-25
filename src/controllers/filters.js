import { ListProducts } from "./ListProductsController.js";

class Filter {
  static byButton(evt) {
    const array = JSON.parse(localStorage.products);

    const filteredArray = array.filter(
      (value) => value.categoria === evt.target.innerText
    );

    localStorage.filteredProducts = JSON.stringify(filteredArray);
  }

  static byInput(evt) {
    const input = evt.target.value;

    const array = JSON.parse(localStorage.products);

    const filteredArray = array.filter((value) => {
      return (
        value.categoria.toLowerCase().includes(input) ||
        value.nome.toLowerCase().includes(input) ||
        value.id === Number(input)
      );
    });

    localStorage.filteredProducts = JSON.stringify(filteredArray);
  }

  static buttonAll() {
    ListProducts.consumeApi();
  }

  static byPriceToHigh() {
    let local = JSON.parse(localStorage.getItem("products"));
    local = local.sort((a, b) => a.preco - b.preco);

    localStorage.products = JSON.stringify(local);
  }

  static byPriceToLower() {
    let local = JSON.parse(localStorage.getItem("products"));
    local = local.sort((a, b) => b.preco - a.preco);

    localStorage.products = JSON.stringify(local);
  }
}

export { Filter };
