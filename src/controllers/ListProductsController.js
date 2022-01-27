class ListProducts {
    static endPoint = "https://kenzie-food-api.herokuapp.com/product";
    static urlAPIMethods = "https://kenzie-food-api.herokuapp.com/my/product";

    static async consumeApi() {
        const response1 = await fetch(ListProducts.endPoint);
        const firstAPI = await response1.json();

        const response2 = await fetch(ListProducts.urlAPIMethods, { headers: { Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTY0MzExODc3OSwiZXhwIjoxNjQzOTgyNzc5LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.cMSKip8ytEcbT3CYBY9_HpYAlZ7diqzhjNghGqPHgVo" } });
        const secondAPI = await response2.json();

        const dataProducts = firstAPI.concat(secondAPI);

        localStorage.products = JSON.stringify(dataProducts);
    }
}

export { ListProducts };