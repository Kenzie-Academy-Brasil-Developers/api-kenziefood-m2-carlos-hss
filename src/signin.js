const userInput = document.querySelector('#input-user');
const passwordInput = document.querySelector('#input-password');
const buttonSignIn = document.querySelector('.button-signin')

function login() {
    if (userInput.value === 'admin' && passwordInput.value === 'admin') {
        window.location.assign('./admin.html');
    } else {
        alert('Usuário e/ou senha incorretos.')
    }
}

buttonSignIn.addEventListener('click', login)
