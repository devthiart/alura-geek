const contactForm = document.querySelector('[data-form-contact]');
const inputs = document.querySelectorAll('[data-input-type]');
let data = {};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  inputs.forEach(input => {
    const type = input.dataset.inputType;
    const value = input.value;
    data = {...data, name: value};
    console.log(data);
  })
  
  alert('Agradecemos o seu contato! Sua mensagem será analisada com muito carinho pela nossa equipe.');
});

