import { openPopup } from './utils.js'

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._popup = document.querySelector(".popup_type_image");
    this._popupImageSource = this._popup.querySelector(".popup__image-source");
    this._popupImageCaption = this._popup.querySelector(".popup__image-caption");
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._cardElement.querySelector(".heart-button").addEventListener("click", () => {
      this._likeCard();
    });

    this._cardElement.querySelector(".trash-button").addEventListener("click", () => {
      this._deleteCard();
    });

    this._cardElement.querySelector(".element__image").addEventListener("click", () => {
      this._handlePreviewPicture();
    });
  }

  _likeCard() {
    this._cardElement.querySelector(".heart-button").classList.toggle("heart-button_activ");
  }

  _deleteCard() {
    this._cardElement.closest(".element");
    this._cardElement.remove();
  }

  _handlePreviewPicture() {
    openPopup(this._popup);
    this._popupImageSource.src = this._link;
    this._popupImageSource.alt = this._name;
    this._popupImageCaption.textContent = this._name;
  }

  createCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();

    this._cardElement.querySelector(".element__image").src = this._link;
    this._cardElement.querySelector(".element__image").alt = this._name;
    this._cardElement.querySelector(".element__title").textContent = this._name;

    return this._cardElement;
  }
}
