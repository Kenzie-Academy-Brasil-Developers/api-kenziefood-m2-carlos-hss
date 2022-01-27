import { ProductRouter } from '../router/router.js';

class Requisitions {

    static registerName = document.querySelector('#product-name');
    static registerPrice = document.querySelector('#product-price');
    static registerCategory = document.querySelector('#product-category');
    static registerImage = document.querySelector('#product-image');
    static registerDescription = document.querySelector('#product-description');
    static registerObject;

    static deleteId = document.querySelector('#id-product');

    static modifyKey = document.querySelector('#product-patch');
    static modifyInput = document.querySelector('#patch-value');

    static
    registerProduct() {
        if (Requisitions.registerName.value !== '' && Requisitions.registerPrice.value !== '' &&
            Requisitions.registerCategory.value !== '' && Requisitions.registerImage.value !== '' &&
            Requisitions.registerDescription.value !== '') {
            Requisitions.registerObject = {
                "nome": Requisitions.registerName.value,
                "preco": Requisitions.registerPrice.value,
                "categoria": Requisitions.registerCategory.value,
                "imagem": Requisitions.registerImage.value,
                "descricao": Requisitions.registerDescription.value
            };
            ProductRouter.post(Requisitions.registerObject);

            Requisitions.registerName.value = '';
            Requisitions.registerPrice.value = '';
            Requisitions.registerCategory.value = '';
            Requisitions.registerImage.value = '';
            Requisitions.registerDescription.value = '';
        } else {
            alert('Todos os campos devem estar preenchidos para o registro acontecer.');
        }
    }

    static
    modifyProduct() {
        if (Requisitions.modifyInput.value !== '') {
            let object;
            if (Requisitions.modifyKey.value === 'nome') {
                object = { "nome": `${Requisitions.modifyInput.value}` }
            } else if (Requisitions.modifyKey.value === 'preco') {
                object = { "preco": `${Requisitions.modifyInput.value}` }
            } else if (Requisitions.modifyKey.value === 'categoria') {
                object = { "categoria": `${Requisitions.modifyInput.value}` }
            } else if (Requisitions.modifyKey.value === 'imagem') {
                object = { "imagem": `${Requisitions.modifyInput.value}` }
            } else if (Requisitions.modifyKey.value === 'descricao') {
                object = { "descricao": `${Requisitions.modifyInput.value}` }
            };

            ProductRouter.patch('idQualquer', object);
            Requisitions.modifyInput.value = '';
        } else {
            alert('Por favor, preencha o valor que deseja alterar e a identificação do produto.');
        }
    }

    static
    deleteProduct() {
        if (Requisitions.deleteId.value !== '') {
            ProductRouter.delete(Requisitions.deleteId.value);
            Requisitions.deleteId.value = '';
        } else {
            alert('Por favor, preencha o campo de identificação do produto.');
        }
    }
}

//Pão de Batata
//10
//Panificadora
//https://i2.wp.com/panelaterapia.com/wp-content/uploads/2016/02/pao-de-batata.jpg?fit=620%2C407&ssl=1

export { Requisitions };