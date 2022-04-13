function validateMaxWidth(input, maxWidth) {
  let message = '';
  const charactersNumber = input.value.length;
  
  if(charactersNumber > maxWidth) {
    message = `A mensagem deve conter no máximo ${maxWidth} caracteres.`;
  }
  input.setCustomValidity(message);
}

export {
  validateMaxWidth,
}