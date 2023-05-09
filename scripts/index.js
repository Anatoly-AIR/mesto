import {Card} from "./Card.js";
import {FormValidator, config} from "./FormValidator.js"
import { openPopup, closePopup } from "./utils.js";

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

const profile = document.querySelector(".profile");
const popupEditButton = profile.querySelector(".edit-button");
const popupCreateCardButton = profile.querySelector(".add-button");
const cardsContainer = document.querySelector(".elements");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupImage = document.querySelector(".popup_type_image");
const popupCloseTypeProfile = popupProfile.querySelector(".popup__close_type_profile");
const popupCloseTypeCard = popupCard.querySelector(".popup__close_type_card");
const popupCloseTypeImg = popupImage.querySelector(".popup__close_type_img");
const formEditProfile = popupProfile.querySelector(".popup__form_type_edit");
const formAddCard = popupCard.querySelector(".popup__form_type_add");
const profileInfoName = document.querySelector(".profile-info__title");
const profileInfoJob = document.querySelector(".profile-info__subtitle");
const nameInput = document.querySelector(".popup__input_el_name");
const jobInput = document.querySelector(".popup__input_el_job");
const titleImage = formAddCard.querySelector(".popup__input_el_title");
const linkImage = formAddCard.querySelector(".popup__input_el_link");
const popupList = Array.from(document.querySelectorAll('.popup'));

function openPopupEdit() {
  nameInput.value = profileInfoName.textContent;
  jobInput.value = profileInfoJob.textContent;
  openPopup(popupProfile);
}

function closePopupEdit() {
  closePopup(popupProfile);
}

function openPopupCreateCard() {
  openPopup(popupCard);
  //cardFormValidator.enableValidation();
}

function closePopupCreateCard() {
  closePopup(popupCard);
}

function closePopupImage() {
  closePopup(popupImage);
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = nameInput.value;
  profileInfoJob.textContent = jobInput.value;
  closePopupEdit(evt);
}

function getCardElement(data) {
  const card = new Card(data, "#element-template");
  const cardElement = card.createCard();
  cardsContainer.prepend(cardElement);
}

function handleCreateCardSubmit(evt) {
  evt.preventDefault();
  const data = {
    name: titleImage.value,
    link: linkImage.value
  }
  getCardElement(data);
  evt.target.reset();
  closePopupCreateCard();
}

function closePopupOverlay () {
  popupList.forEach((popup) => {
    popup.addEventListener("click", function (evt) {
      if (evt.target.classList.contains('popup')) { //проверяем, что клик произошёл на попапе, а не на других элементах
        closePopup(popup);
      }
    });
  });
}

closePopupOverlay ();

initialCards.forEach((item) => {
  getCardElement(item);
});

//const profileFormValidator = new FormValidator(config, ".popup__form_type_edit");
const profileFormValidator = new FormValidator(config, formEditProfile);
profileFormValidator.enableValidation();

//const cardFormValidator = new FormValidator(config, ".popup__form_type_add");
const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

popupEditButton.addEventListener("click", openPopupEdit); //клик по кнопке редактирования профиля
popupCloseTypeProfile.addEventListener("click", closePopupEdit); //клик по кнопке закрытия окна редактирования профиля
popupCreateCardButton.addEventListener("click", openPopupCreateCard); //клик по кнопке добавления карточки
popupCloseTypeCard.addEventListener("click", closePopupCreateCard); //клик по кнопке закрытия окна добавления карточки
popupCloseTypeImg.addEventListener("click", closePopupImage); //клик по кнопке закрытия большого изображения
formEditProfile.addEventListener("submit", handleEditProfileSubmit); //клик по кнопке "Сохранить" в окне редактирования профиля
formAddCard.addEventListener("submit", handleCreateCardSubmit); //клик по кнопке "Создать" в окне добавления карточки
