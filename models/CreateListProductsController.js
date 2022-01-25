class CreateListProduct {

    static
    createTemplateProduct({ imagem, categoria, nome, descricao, preco }) {

        const section = document.querySelector(".container-products");

        const divCard = document.createElement("div");
        const figure = document.createElemente("figure");
        const img = document.createElement("img");
        const nameH2 = document.createElement("h2");
        const category = document.createElement("span");
        const description = document.createElement("p");
        const price = document.createElement("span");


        divCard.className = "product__card";
        figure.className = "product-figure";


        img.className = "product-figure__image";
        img.src = imagem;

        nameH2.className = "product__title";
        nameH2.innerText = nome;

        category.className = "product-section";
        category.innerText = categoria;

        description.className = "product__description";
        description.innerText = descricao;

        price.className = "container-additional__price";
        price.innerText = preco;


        figure.appendChild(img);
        divCard.appendChild(figure);
        divCard.appendChild(category);
        divCard.appendChild(nameH2);
        divCard.appendChild(description);
        divCard.appendChild(price);

        section.appendChild(divCard);
    }

}