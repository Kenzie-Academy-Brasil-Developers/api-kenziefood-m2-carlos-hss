class Cart {
    static setCartProducts(evt) {
        const divArray = evt.target.closest(".product").childNodes;
        let localConcat = JSON.parse(localStorage.cart).concat([{
            name: divArray[1].innerText,
            imgSrc: divArray[0].firstChild.src,
            imgAlt: divArray[0].firstChild.alt,
            figcaption: divArray[0].childNodes[1].innerText,
            category: divArray[0].lastChild.innerText,
            price: divArray[3].firstChild.innerText,
        }, ]);
        localStorage.cart = JSON.stringify(localConcat);
        if (JSON.parse(localStorage.cart).length > 0) {
            Cart.footerValues();
            Cart.generateCart();
        }
    }

    static generateCart() {
        const sectionCart = document.querySelector(".cart-body");
        const lengthCart = JSON.parse(localStorage.cart);
        sectionCart.innerHTML = "";
        for (const i in JSON.parse(localStorage.cart)) {
            Cart.cartModel(i);
        }

        if (lengthCart.length > 0) {
            sectionCart.classList.remove("empty");
        }
    }

    static footerValues() {
        let local = JSON.parse(localStorage.cart);
        const footer = document.querySelector(".cart-footer");
        let quantity = document.querySelector(
            ".container-quantity__total-quantity"
        );
        let price = document.querySelector(".container-price__total-price");
        footer.className = "cart-footer";

        let priceAcumulator = 0;
        local.forEach(
            (value) =>
            (priceAcumulator =
                priceAcumulator + parseFloat(value.price.split(" ")[1]))
        );

        this.priceTotal = priceAcumulator;
        price.innerText = `R$ ${priceAcumulator.toFixed(2)}`;
        quantity.innerText = String(local.length);
    }

    static divBag() {
        const sectionCart = document.querySelector(".cart-body");

        const divBag = document.createElement("div");
        const imgBag = document.createElement("img");
        const spanBag = document.createElement("span");
        const pBag = document.createElement("p");

        divBag.classList.add("empty-cart");
        divBag.classList.add("flex-col");
        imgBag.className = "empty-cart_image";
        spanBag.className = "empty-cart_span";
        pBag.className = "empty-cart_paragraph";

        imgBag.src = "./../../public/assets/img/shopping-bag.svg";
        spanBag.innerText = "Ops!";
        pBag.innerText = "Por enquanto não temos produtos no carrinho";

        divBag.appendChild(imgBag);
        divBag.appendChild(spanBag);
        divBag.appendChild(pBag);
        sectionCart.appendChild(divBag);
    }

    static cartModel(i) {
        const savedCart = JSON.parse(localStorage.getItem("cart"));

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

        divCartProduct.classList.add("cart-product");
        divCartProduct.classList.add("flex-row");
        figure.className = "cart-figure";
        img.className = "cart-figure__image";
        figcaption.classList.add("cart-figure__figcaption");
        figcaption.classList.add("hidden");
        divProductTexts.classList.add("container-information");
        divProductTexts.classList.add("flex-col");
        nameH2.classList.add("container-information_title");
        nameH2.classList.add("title2");
        category.classList.add("container-information__section");
        category.classList.add("detail");
        price.classList.add("container-information__price");
        price.classList.add("caption");
        divButtonRemove.className = "container-remove";
        buttonRemove.className = "remove-button";
        imgRemove.className = "remove-button__image";

        img.src = savedCart[i].imgSrc;
        img.alt = savedCart[i].imgAlt;
        figcaption.innerText = savedCart[i].figcaption;
        nameH2.innerText = savedCart[i].name;
        category.innerText = savedCart[i].category;
        price.innerText = savedCart[i].price;
        imgRemove.src = "./../../public/assets/img/remove-product-icon.svg";

        buttonRemove.addEventListener("click", Cart.removeProducts);

        figure.appendChild(img);
        figure.appendChild(figcaption);
        buttonRemove.appendChild(imgRemove);
        divProductTexts.appendChild(nameH2);
        divProductTexts.appendChild(category);
        divProductTexts.appendChild(price);
        divButtonRemove.appendChild(buttonRemove);

        divCartProduct.appendChild(figure);
        divCartProduct.appendChild(divProductTexts);
        divCartProduct.appendChild(divButtonRemove);

        divCart.appendChild(divCartProduct);
    }

    static removeProducts(evt) {
        const sectionCart = document.querySelector(".cart-body");
        const lengthCart = JSON.parse(localStorage.cart);
        let local = JSON.parse(localStorage.cart);
        let object = local.find(
            (value) =>
            value.name ===
            evt.target.closest(".cart-product").childNodes[1].firstChild.innerText
        );

        let array = local.splice(local.indexOf(object), 1);

        localStorage.cart = JSON.stringify(local);

        if (JSON.parse(localStorage.cart).length > 0) {
            Cart.footerValues();
            Cart.generateCart();
        } else {
            const footer = document.querySelector(".cart-footer");
            sectionCart.innerHTML = "";
            footer.classList.add("hidden");
            Cart.divBag();
        }
        if (lengthCart.length <= 1) {
            sectionCart.classList.add("empty");
        }
    }
}

export { Cart };