const userInput = document.querySelector('#input-user');
const passwordInput = document.querySelector('#input-password');
const buttonSignIn = document.querySelector('.button-signin')

function login() {
    if (userInput.value === 'leogm360' && passwordInput.value === '134679@#Le' ||
        userInput.value === 'guisix18' && passwordInput.value === 'G2003@g' ||
        userInput.value === 'carlos-hss' && passwordInput.value === '3465@47') {
        window.location.assign('./admin.html');
    } else {
        alert('Usuário e/ou senha incorretos.')
    }
}

buttonSignIn.addEventListener('click', login)