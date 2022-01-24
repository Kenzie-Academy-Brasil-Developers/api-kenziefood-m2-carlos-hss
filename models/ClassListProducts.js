// import { ListProducts } from "./js/ClassListProducts.js"

class CreateListProduct {

    static
    createTemplateProduct({ imagem, categoria, nome, descricao, preco }) {

        const section = document.querySelector("section");

        const divCard = document.createElement("div");
        const img = document.createElement("img");
        const category = document.createElement("span");
        const name = document.createElement("h4");
        const description = document.createElement("p");
        const price = document.createElement("span");


        divCard.id = "product__card";
        img.src = imagem;
        category.innerText = categoria;
        name.innerText = nome;
        description.innerText = descricao;
        price.innerText = preco;


        divCard.appendChild(img);
        divCard.appendChild(category);
        divCard.appendChild(name);
        divCard.appendChild(description);
        divCard.appendChild(price);

        section.appendChild(divCard);
    }

}


let itens = JSON.parse(localStorage.getItem("products"))
console.log(itens)
itens.forEach((item) => {
    CreateListProduct.createTemplateProduct(item)
})