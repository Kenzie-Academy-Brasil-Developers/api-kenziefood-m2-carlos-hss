import { Requisitions } from "./controllers/requisitions.js";

const registerButton = document.querySelector("#register-button");
const deleteButton = document.querySelector('#delete-button');

registerButton.addEventListener('click', Requisitions.registerProduct)
deleteButton.addEventListener('click', Requisitions.deleteProduct)