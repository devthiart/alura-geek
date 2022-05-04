export default function showErrorMessage(inputType, input) {
  let message = '';
  errorTypes.forEach((error) => {
    if(input.validity[error]) {
      message = errorMessages[inputType][error];
    }
  });

  return message;
}

const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
];

const errorMessages = {
  name: {
    valueMissing: 'Preencha o nome.',
    patternMismatch: 'O nome deve conter no máximo 40 caracteres.',
  },
  message: {
    valueMissing: 'Preencha a mensagem.',
    customError: 'A mensagem deve conter no máximo 120 caracteres.',
  },
  email: {
    valueMissing: 'Preencha o email',
    typeMismatch: 'Preencha um email válido. Exemplo: admin@alurageek.com'
  },
  password: {
    valueMissing: 'Preencha a senha'
  }
}