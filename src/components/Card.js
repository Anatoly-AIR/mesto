export class Card {
  constructor({data, handleCardClick, handleCardLike, handleCardDeleteOpen, myId }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._idCard = data._id;
    this._myId = myId;
    this._ownerId = data.owner._id;
    this._quantityLikes = data.likes.length;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._handleCardLike = handleCardLike;
    this._handleCardDeleteOpen = handleCardDeleteOpen;
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
      this._handleCardLike(this._idCard);
    });

    this._trashButton.addEventListener("click", () => {
      this._handleCardDeleteOpen(this._idCard);
      //this._deleteCard();
    });
  }

  isLiked() {
    if(this._heartButton.classList.contains("heart-button_activ")) {
      return true;
    }
    return false;
  }

  toggleLike(likes) {
    this._heartButton.classList.toggle("heart-button_activ");
    this._cardElement.querySelector(".quantity-like").textContent = likes;
}

  handleLikeCard(likes) {
    this._heartButton.classList.add("heart-button_activ");
    this._cardElement.querySelector(".quantity-like").textContent = likes;
  }

  handleDislikeCard(likes) {
    this._heartButton.classList.remove("heart-button_activ");
    this._cardElement.querySelector(".quantity-like").textContent = likes;
  }

  _deleteCard() {
    this._cardElement.remove();
  }

  deleteCard() {
    this._cardElement.remove();
  }

  createCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._getImage();
    this._heartButton = this._getHeartButton();
    this._trashButton = this._getTrashButton();
    this._setEventListeners();

    this._cardElement.querySelector(".element__title").textContent = this._name;
    this._cardElement.querySelector(".quantity-like").textContent = this._quantityLikes;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    if (this._myId === this._ownerId) {
      this._trashButton.style.display = 'block';
    }else {
      this._trashButton.style.display = 'none';
    };

    console.log(`this.myId: ${this._myId}`);
    //console.log(`this._ownerId: ${this._ownerId}`);

    return this._cardElement;
  }
}
