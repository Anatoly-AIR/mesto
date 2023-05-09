export const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.submit-button',
  inactivButtonClass: 'submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_activ'
}

export class FormValidator {
  constructor(config, formElement) {
    //this._formElement = document.querySelector(formElement);
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = this._formElement.querySelector(config.submitButtonSelector);
    this._inactivButtonClass = this._formElement.querySelector(config.inactivButtonClass);
    this._inputErrorClass = this._formElement.querySelector(config.inputErrorClass);
    this._errorClass = this._formElement.querySelector(config.errorClass);
    console.log(this);
    console.log(this._formElement);
  }

  _showInputError (inputElement, errorMessage) {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  //inputElement.classList.add(config.inputErrorClass);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  //errorElement.classList.add(config.errorClass);
  errorElement.classList.add(this._errorClass);
}

  _hideInputError (inputElement) {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    //inputElement.classList.remove(config.inputErrorClass);
    inputElement.classList.remove(this._inputErrorClass);
    //errorElement.classList.remove(config.errorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError (inputElement, inputElement.validationMessage);
    }else {
      this._hideInputError (inputElement);
    }
  }

  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      //console.log(inputElement);  //это для отладки
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      //this._buttonElement.classList.add(config.inactivButtonClass);
      this._buttonElement.classList.add(this._inactivButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      //this._buttonElement.classList.remove(config.inactivButtonClass);
      this._buttonElement.classList.remove(this._inactivButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners () {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
  }

  enableValidation () {
    //const formElement = this._formElement;
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners ();
  }
}
