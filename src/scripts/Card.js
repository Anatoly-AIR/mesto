import { popupImageSource, popupImageCaption, initialCards } from '../scripts/utils.js';
import { Popup } from '../scripts/Popup.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
//import { data } from 'autoprefixer';

export class Card {
  constructor({data, handleCardClick}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
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
      //this._handleCardClick(this._name, this._link );
      this._handleCardClick();
    });
  }

  _likeCard() {
    this._cardElement.querySelector(".heart-button").classList.toggle("heart-button_activ");
  }

  _deleteCard() {
    this._cardElement.remove();
  }

  /*handleCardClick() {
    const imagePopup = new PopupWithImage('.popup_type_image');
    imagePopup.open();
    popupImageSource.src = this._link;
    popupImageSource.alt = this._name;
    popupImageCaption.textContent = this._name;

    this._handleCardClick();
  }*/

  createCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();

    this._cardElement.querySelector(".element__image").src = this._link;
    this._cardElement.querySelector(".element__title").textContent = this._name;
    this._cardElement.querySelector(".element__image").alt = this._name;

    return this._cardElement;
  }
}
