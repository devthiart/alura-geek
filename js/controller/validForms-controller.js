import showErrorMessage from "../view/errorMessages-view.js";
import { validateMaxWidth } from "./customValidations-controller.js";

const inputs = document.querySelectorAll('[data-input-type]');

inputs.forEach(input => {
  input.addEventListener('blur', (event) => {
    validate(event.target);
  });
});

function validate(input) {
  // get value 'data-input-type'.
  const inputType = input.dataset.inputType;

  // Verify custom validations.
  if(validators[inputType]) {
    validators[inputType](input);
  }

  if(input.validity.valid) {
    const messageError = input.parentElement.querySelector(`[data-message-error=${inputType}]`);
    messageError.classList.remove('input-message-error--active');
  } else {
    const messageError = input.parentElement.querySelector(`[data-message-error=${inputType}]`);
    messageError.classList.add('input-message-error--active');
    messageError.innerHTML = showErrorMessage(inputType, input);
  }
}

// Add custom validations in inputs.
const validators = {
  message: input => validateMaxWidth(input, 120),
}
