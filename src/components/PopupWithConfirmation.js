import { Popup } from "../components/Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor({popupSelector, submitFunction}) {
    super (popupSelector);
    this._submitFunction = submitFunction;
    this._popupWithConfirmation = this._popupElement.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupWithConfirmation.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitFunction(this._elementId);
    });
  }

  open(cardId) {
    super.open();
    console.log(`open: ${cardId}`);
    this._elementId = cardId;
  }

}
