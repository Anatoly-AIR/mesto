import { popupEditButton } from './utils.js'

export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener("keydown", this._handleEscClose);
    //console.log("air");
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener("keydown", this._handleEscClose);
    //console.log("air");
  }

  _handleEscClose(evt) {
    console.log("air");
    if (evt.key === 'Escape') {
      evt.preventDefault();
      console.log("air1");
      console.log(this);
    //const popupOpened = document.querySelector('.popup_opened');
      this.close();
    }
  }

  setEventListeners() {
    popupEditButton.addEventListener("click", () => {
      this.open()
    }); //клик по кнопке редактирования профиля

    this._popupElement.addEventListener ("click", (evt) => {
      if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }
}
