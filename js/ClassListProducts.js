class ListProducts {

    static endPoint = "https://kenzie-food-api.herokuapp.com/product";

    static async consumeApi() {
        const response = await fetch(this.endPoint);
        const dataProducts = await response.json();

        localStorage.clear();
        localStorage.products = JSON.stringify(dataProducts);

    }

}

ListProducts.consumeApi();