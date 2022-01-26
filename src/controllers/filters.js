import { CreateListProduct } from "./CreateListProductsController.js";

class Filter {
    static toggleActive(target) {
        const lastActive = document.querySelector(".active");

        lastActive.classList.toggle("active");
        target.classList.toggle("active");
    }

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

        Filter.toggleActive(evt.target);
    }

    static byInput(evt) {
        const input = evt.target.value;

        if (input !== '') {
            const inputLower = `${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`
            const section = document.querySelector(".container-products");
            const array = JSON.parse(localStorage.products);

            const filteredArray = array.filter((value) => {
                return (
                    value.categoria.includes(inputLower) ||
                    value.nome.includes(inputLower) ||
                    value.id === Number(input)
                );
            });

            section.innerHTML = "";

            filteredArray.forEach((product) => {
                CreateListProduct.createTemplateProduct(product);
            });
        } else {
            const array = JSON.parse(localStorage.getItem("products"));
            array.forEach((value) => {
                CreateListProduct.createTemplateProduct(value);
            })
        }
    }

    static buttonAll(evt) {
        const section = document.querySelector(".container-products");
        const array = JSON.parse(localStorage.getItem("products"));

        section.innerHTML = "";

        array.forEach((value) => {
            CreateListProduct.createTemplateProduct(value);
        })

        Filter.toggleActive(evt.target);
    }

    static byHigherPrice(evt) {
        const array = JSON.parse(localStorage.getItem("products"));
        const sortedArray = [...array].sort((a, b) => b.preco - a.preco);
        const section = document.querySelector(".container-products");

        section.innerHTML = "";

        sortedArray.forEach((product) => {
            CreateListProduct.createTemplateProduct(product);
        });

        Filter.toggleActive(evt.target);
    }

    static byLowerPrice(evt) {
        const array = JSON.parse(localStorage.getItem("products"));
        const sortedArray = [...array].sort((a, b) => a.preco - b.preco);
        const section = document.querySelector(".container-products");

        section.innerHTML = "";

        sortedArray.forEach((product) => {
            CreateListProduct.createTemplateProduct(product);
        });

        Filter.toggleActive(evt.target);
    }
}

export { Filter };