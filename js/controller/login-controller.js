import md5 from '../service/md5.js';
import { accountList } from '../service/user-service.js';

const loginForm = document.querySelector('[data-form-login]');
const emailInput = document.querySelector('[data-email]');
const passwordInput = document.querySelector('[data-password]');
const loader = document.querySelector('[data-loader]');
const messageError = document.querySelector('[data-message-error]');

if(document.cookie) {
  window.location = './lista-produtos.html';
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  try{
    hideErrorMessage();
    loader.classList.add('loader--show');
    const response = await validLogin(emailInput.value);
    const encryptedPassword = md5(passwordInput.value);

    if(response[0].password === encryptedPassword) {
      document.cookie = `username=${emailInput.value}; expires=${calcTomorrowDate()}`;
      window.location = './lista-produtos.html';
    } else {
      showErrorMessage('Senha incorreta.');
    }
    loader.classList.remove('loader--show');
  }
  catch(error){
    loader.classList.remove('loader--show');
    showErrorMessage('Usuário não encontrado.');
  }
});

const validLogin = async (email) => {
  try{
    const result = await accountList(email);
  
    return result;
  }
  catch(error) {
    console.log(error);
  }
}

const calcTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
}

const showErrorMessage = (message) => {
  messageError.classList.add('input-message-error--active');
  messageError.innerHTML = message;
}

const hideErrorMessage = () => {
  messageError.classList.remove('input-message-error--active');
}
