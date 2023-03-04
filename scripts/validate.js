const form = document.querySelector(".form");
const formInput = form.querySelector(".form__item");
const formError = form.querySelector(`.${formInput.id}-error`);

function showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__item-error_activ');
}

function hideInputError (formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__item_type_error');
  errorElement.classList.remove('form__item-error_activ');
  errorElement.textContent = '';
}

function checkInputValidity (formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError (formElement, inputElement, inputElement.validationMessage);
  }else {
    hideInputError (formElement, inputElement);
  }
}

function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement);
      });
    });
}

setEventListeners (form);

formInput.addEventListener ('input', function () {
  checkInputValidity(form, formInput);
});
