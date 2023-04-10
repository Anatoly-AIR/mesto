const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popup = document.querySelector(".popup_type_image");
const popupImageSource = document.querySelector(".popup__image-source");
const popupImageCaption = document.querySelector(".popup__image-caption");

import { openPopup } from './index.js';

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._cardElement.querySelector(".heart-button").addEventListener("click", () => {
      this._likeCard();
    });

    this._cardElement.querySelector(".trash-button").addEventListener("click", () => {
      this._deleteCard();
    });

    this._cardElement.querySelector(".element__image").addEventListener("click", () => {
      this._openBigImage();
    });
  }

  _likeCard() {
    this._cardElement.querySelector(".heart-button").classList.toggle("heart-button_activ");
  }

  _deleteCard() {
    this._cardElement.querySelector(".trash-button").closest(".element");
    this._cardElement.remove();
  }

  _openBigImage() {
    this._cardElement.querySelector(".element__image");
    openPopup(popup);
    popupImageSource.src = this._link;
    popupImageSource.alt = this._name;
    popupImageCaption.textContent = this._name;
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

initialCards.forEach((item) => {
  const card = new Card(item, "#element-template");
  const cardElement = card.createCard();

  document.querySelector(".elements").prepend(cardElement);
});
