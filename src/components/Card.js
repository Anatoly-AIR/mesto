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

  _getImage() {
    return this._cardElement.querySelector(".element__image");
  }

  _getHeartButton() {
    return this._cardElement.querySelector(".heart-button");
  }

  _getTrashButton() {
    return this._cardElement.querySelector(".trash-button");
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link );
    });

    this._heartButton.addEventListener("click", () => {
      this._likeCard();
    });

    this._trashButton.addEventListener("click", () => {
      this._deleteCard();
    });
  }

  _likeCard() {
    this._heartButton.classList.toggle("heart-button_activ");
  }

  _deleteCard() {
    this._cardElement.remove();
  }

  createCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._getImage();
    this._heartButton = this._getHeartButton();
    this._trashButton = this._getTrashButton();
    this._setEventListeners();

    this._cardElement.querySelector(".element__title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._cardElement;
  }
}
