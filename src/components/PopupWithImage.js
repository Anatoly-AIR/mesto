import { Popup } from '../components/Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImageCaption = this._popupElement.querySelector(".popup__image-caption");
    this._popupImageSource = this._popupElement.querySelector(".popup__image-source");
  }

  open(data) {
    this._popupImageSource.src = data.link;
    this._popupImageCaption.textContent = data.name;
    this._popupImageSource.alt = data.name;

    super.open();
  }
}
