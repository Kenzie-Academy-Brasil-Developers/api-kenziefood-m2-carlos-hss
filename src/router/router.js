class ProductRouter {

    static urlAPI = "https://kenzie-food-api.herokuapp.com/my/product";

    static
    async post({ nome, preco, categoria, imagem, descricao }) {

        const response = await fetch(this.urlAPI, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTY0MzExODc3OSwiZXhwIjoxNjQzOTgyNzc5LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.cMSKip8ytEcbT3CYBY9_HpYAlZ7diqzhjNghGqPHgVo"
            },
            body: JSON.stringify({
                "nome": nome,
                "preco": preco,
                "categoria": categoria,
                "imagem": imagem,
                "descricao": descricao
            })
        });

        return response;
    }

    static
    async patch(id, object) {

        const response = await fetch(`${this.urlAPI}/:${id}`, {
            method: "patch",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTY0MzExODc3OSwiZXhwIjoxNjQzOTgyNzc5LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.cMSKip8ytEcbT3CYBY9_HpYAlZ7diqzhjNghGqPHgVo"
            },
            body: JSON.stringify(object)
        });

        return object;
    }

    static
    async delete(id) {

        const response = await fetch(`${this.urlAPI}/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTY0MzExODc3OSwiZXhwIjoxNjQzOTgyNzc5LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.cMSKip8ytEcbT3CYBY9_HpYAlZ7diqzhjNghGqPHgVo"
            },
        });

        return id;
    }
}

export { ProductRouter }