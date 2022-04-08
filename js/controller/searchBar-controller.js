const menuForm = document.querySelector('[data-search-form]');

document.querySelector('[data-search-button]').onclick = () => {
  menuForm.classList.toggle('form-search--open');
}