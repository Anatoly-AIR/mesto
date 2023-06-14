import { Popup } from '../scripts/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImageCaption = document.querySelector(".popup__image-caption");
    this._popupImageSource = document.querySelector(".popup__image-source");
  }

  open(data) {
    this._popupImageSource.src = data.link;
    this._popupImageCaption.textContent = data.name;
    this._popupImageSource.alt = data.name;

    super.open();

  }

  close() {
    super.close();
  }
}
