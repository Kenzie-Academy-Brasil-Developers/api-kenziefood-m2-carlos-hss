import { CreateListProduct } from "./CreateListProductsController.js";

class Filter {
  static byButton(evt) {
    const array = JSON.parse(localStorage.products);
    const section = document.querySelector(".container-products");

    const filteredArray = array.filter(
      (value) => value.categoria === evt.target.innerText
    );

    section.innerHTML = "";

    filteredArray.forEach((product) => {
      CreateListProduct.createTemplateProduct(product);
    });
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
    const array = JSON.parse(localStorage.getItem("products"));
  }

  static byHigherPrice() {
    const array = JSON.parse(localStorage.getItem("products"));

    const sortedArray = [...array].sort((a, b) => b.preco - a.preco);

    localStorage.sortedProducts = JSON.stringify(sortedArray);
  }

  static byLowerPrice() {
    // console.log("low")
    const array = JSON.parse(localStorage.getItem("products"));

    const sortedArray = [...array].sort((a, b) => a.preco - b.preco);

    localStorage.sortedProducts = JSON.stringify(sortedArray);
  }
}

export { Filter };
