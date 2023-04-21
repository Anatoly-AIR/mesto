export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.submit-button',
  inactivButtonClass: 'submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_activ'
}

export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    //this._formElement = document.querySelector(formElement);
    this._inputList = Array.from(document.querySelectorAll(config.inputSelector));
    this._buttonElement = document.querySelector(config.submitButtonSelector);
  }

  _showInputError (inputElement, errorMessage) {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._config.errorClass);
}

  _hideInputError (inputElement) {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError (inputElement, inputElement.validationMessage);
    }else {
      this._hideInputError (inputElement);
    }
  }



  //_hasInvalidInput (inputList) {
  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState (inputList, buttonElement) {
  //_toggleButtonState (buttonElement) {
    if (this._hasInvalidInput(this._inputList)) {
      buttonElement.classList.add(config.inactivButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._config.inactivButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners () {
    //this._toggleButtonState(this._inputList, this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        //this._toggleButtonState(this._inputList, this._buttonElement);
        this._checkInputValidity(inputElement);
        //this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  }

  enableValidation () {
    const formElement = document.querySelector(this._formElement);
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    //this._setEventListeners(formElement, config );
    this._setEventListeners ();
  }
}
