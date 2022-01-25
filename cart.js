class Cart {

    static
    setCartProducts(evt) {
        const divArray = evt.target.closest("div").childNodes;

        const divCart = document.querySelector(".cart-body");

        const divCartProduct = document.createElement("div");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        const divProductTexts = document.createElement("div");
        const nameH2 = document.createElement("h2");
        const category = document.createElement("span");
        const price = document.createElement("span");
        const divButtonRemove = document.createElement("div");
        const buttonRemove = document.createElement("button");
        const imgRemove = document.createElement("img");


        divCartProduct.classList.add("cart-product flex-row");
        figure.className = "cart-figure";
        img.className = "cart-figure__image";
        figcaption.classList.add("cart-figure__figcaption hidden");
        divProductTexts.classList.add("container-information flex-col");
        nameH2.classList.add("container-information_title title2");
        category.classList.add("container-information__section detail");
        price.classList.add("container-information__price caption");
        divButtonRemove.className = "container-remove";
        buttonRemove.className = "remove-button";
        imgRemove.className = "remove-button__image";


        img.src = divArray[0].firstChild.src;
        img.alt = divArray[0].firstChild.alt;
        figcaption.innerText = divArray[0].childNodes[1].innerText;
        nameH2.innerText = divArray[1].innerText;
        category.innerText = divArray[0].lastChild.innerText;
        price.innerText = divArray[3].firstChild.innerText;
        imgRemove.src = "./../../public/assets/img/remove-product-icon.svg"


        figure.appendChild(img);
        figure.appendChild(figcaption);
        buttonRemove.appendChild(imgRemove)
        divProductTexts.appendChild(nameH2);
        divProductTexts.appendChild(category);
        divProductTexts.appendChild(price);
        divButtonRemove.appendChild(buttonRemove)

        divCartProduct.appendChild(figure);
        divCartProduct.appendChild(divProductTexts);
        divCartProduct.appendChild(divButtonRemove)

        divCart.appendChild(divCartProduct);
    }

    static
    removeProducts(evt) {
        const divCart = document.querySelector(".cart-body");

        divCart.removeChild(evt.target.closest("div"))
    }

}