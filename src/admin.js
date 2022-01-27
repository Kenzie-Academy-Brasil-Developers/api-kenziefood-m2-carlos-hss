import { Requisitions } from "./controllers/requisitions.js";

const registerButton = document.querySelector("#register-button");
const deleteButton = document.querySelector("#delete-button");
const modifyButton = document.querySelector("#modify-button");
const buttonsMenu = Array.from(document.querySelectorAll(".button-menu"));

function setButtonActive(target) {
  const lastActive = document.querySelector(".active");

  lastActive.classList.toggle("active");
  target.classList.toggle("active");
}

function changeForm(target) {
  const containerForm = Array.from(
    document.querySelectorAll(".container-form")
  );
  const formActive = document
    .querySelector(`.${target.value}`)
    .closest("section");

  containerForm.forEach((form) => {
    if (!form.className.includes("hidden")) {
      form.classList.toggle("hidden");

      formActive.classList.toggle("hidden");
    }
  });
}

buttonsMenu.forEach((button) => {
  button.addEventListener("click", (event) => {
    setButtonActive(event.target);

    changeForm(event.target);
  });
});

registerButton.addEventListener("click", Requisitions.registerProduct);
deleteButton.addEventListener("click", Requisitions.deleteProduct);
modifyButton.addEventListener("click", Requisitions.modifyProduct);
registerButton.addEventListener("click", Requisitions.registerProduct);
