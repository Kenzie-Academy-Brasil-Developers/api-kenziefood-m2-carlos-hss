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
        const section = document.querySelector(".container-products");
        const array = JSON.parse(localStorage.products);

        const filteredArray = array.filter((value) => {
            return value.categoria.includes(input) ||
                value.nome.includes(input) ||
                value.id === Number(input);
        });

        section.innerHTML = "";

        filteredArray.forEach((product) => {
            CreateListProduct.createTemplateProduct(product);
        });
    }

    static buttonAll() {
        const array = JSON.parse(localStorage.getItem("products"));
    }

    static byHigherPrice() {
        const array = JSON.parse(localStorage.getItem("products"));
        const sortedArray = [...array].sort((a, b) => b.preco - a.preco);
        const section = document.querySelector(".container-products");

        section.innerHTML = "";

        sortedArray.forEach((product) => {
            CreateListProduct.createTemplateProduct(product);
        });
    }

    static byLowerPrice() {
        const array = JSON.parse(localStorage.getItem("products"));
        const sortedArray = [...array].sort((a, b) => a.preco - b.preco);
        const section = document.querySelector(".container-products");

        section.innerHTML = "";

        sortedArray.forEach((product) => {
            CreateListProduct.createTemplateProduct(product);
        });
    }
}

export { Filter };