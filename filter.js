class Filter {

    static
    byButton(evt) {
        const button = evt.target;

        localStorage.products = array.filter(value => value.category === button.value);
    }

    static
    byInput(evt) {
        const input = evt.target.closest("input");

        localStorage.products = array.filter(value => value.categoria === input.value ||
            value.nome === input.value ||
            value.id === input.value);
    }

    static
    buttonAll() {
        ListProducts.consumeApi()
    }

}

export { Filter }