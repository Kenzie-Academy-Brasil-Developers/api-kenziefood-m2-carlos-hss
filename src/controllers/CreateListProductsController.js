class CreateListProduct {

    static
    createTemplateProduct({ imagem, categoria, nome, descricao, preco }) {

        const section = document.querySelector(".container-products");

        const divCard = document.createElement("div");
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const img = document.createElement("img");
        const nameH2 = document.createElement("h2");
        const category = document.createElement("span");
        const imgIcon = document.createElement("img");
        const description = document.createElement("p");
        const divPrice = document.createElement("div");
        const price = document.createElement("span");
        const button = document.createElement("button");
        const imgButton = document.createElement("img");


        divCard.className = "product";
        figure.className = "product-figure";
        figcaption.classList.add("product-figure__figcaption");
        figcaption.classList.add("hidden")
        img.className = "product-figure__image";
        nameH2.classList.add("product__title");
        nameH2.classList.add("title1");
        category.classList.add("product-section");
        category.classList.add(`${categoria.toLowerCase()}`);
        imgIcon.className = "product-section__image";
        description.classList.add("product__description");
        description.classList.add("caption");
        divPrice.classList.add("container-additional");
        divPrice.classList.add("flex-row");
        price.classList.add("container-additional__price");
        price.classList.add("title3");
        button.className = "addcart-button";
        imgButton.className = "addcart-button__image";

        figcaption.innerText = nome;
        img.src = imagem;
        img.alt = nome;
        nameH2.innerText = nome;
        category.innerText = categoria;
        imgIcon.src = `./public/assets/img/${categoria.toLowerCase()}-icon.svg`
        description.innerText = descricao;
        price.innerText = preco;
        imgButton.src = "./public/assets/img/add-cart-icon.svg";
        imgButton.alt = "Add cart button";

        figure.appendChild(img);
        figure.appendChild(figcaption);
        figure.appendChild(category);
        category.prepend(imgIcon);
        button.appendChild(imgButton)
        divPrice.appendChild(price);
        divPrice.appendChild(button);
        divCard.appendChild(figure);
        divCard.appendChild(nameH2);
        divCard.appendChild(description);
        divCard.appendChild(divPrice)

        section.appendChild(divCard);
    }

}

export { CreateListProduct }