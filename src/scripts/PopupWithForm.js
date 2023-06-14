import { Popup } from "../scripts/Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);

    this._popupWithForm = this._popupElement.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {  //получаем данные из полей ввода
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this._inputValues = {};
    this._inputList.forEach(input => {
      const value = input.value;
      const name = input.name;
      this._inputValues[name] = value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    this._popupWithForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    this._popupWithForm.reset();

    super.close();
  }
}
