class ListProducts {
  static endPoint = "https://kenzie-food-api.herokuapp.com/products";
  static auth = "https://kenzie-food-api.herokuapp.com/auth/login";
  static urlAPIMethods = "https://kenzie-food-api.herokuapp.com/my/product";

  static async consumeApi() {
    const response = await fetch(this.endPoint);

    const products = await response.json();

    localStorage.products = JSON.stringify(products);
  }
}

export { ListProducts };
