import '../src/pages/index.css';
import {Card} from "../src/scripts/Card.js";
import {FormValidator, config} from "../src/scripts/FormValidator.js"
import {Section} from "../src/scripts/Section.js";
import { initialCards } from "../src/scripts/utils.js";
import { Popup } from "../src/scripts/Popup.js";
import { PopupWithImage } from "../src/scripts/PopupWithImage.js";
import { PopupWithForm } from "../src/scripts/PopupWithForm.js";
import { UserInfo } from "../src/scripts/UserInfo.js";
import { editProfileButton, CreateCardButton, popupProfile, popupCard, formEditProfile, formAddCard, nameInput, jobInput, titleImage, linkImage } from "../src/scripts/utils.js";
import { data } from 'autoprefixer';

const userInfo = new UserInfo({
  profileNameSelector: '.profile-info__title',
  profileJobSelector: '.profile-info__subtitle'
});

const popupEditProfile = new Popup (
  '.popup_type_profile'
)

const popupTypeCard = new Popup (
  '.popup_type_card'
)

const popup = new Popup (
  //'.popup_type_profile'
  '.popup'
)

const popupWithImage = new PopupWithImage('.popup_type_image');

const popupWithFormEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});

const popupWithFormCreateCard = new PopupWithForm({
  popupSelector: '.popup_type_card',
  handleFormSubmit: (data) => {
    data.name = titleImage.value,
    data.link = linkImage.value
    const card = new Card({data}, "#element-template");
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
    console.log(data);
  }
});

/*  cardElement.renderer(data);
  //getCardElement(data);
  evt.target.reset();
  closePopupCreateCard();
}*/

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = new Card({
      data,
      handleCardClick: () => {
        popupWithImage.open(data);
      }
    }, "#element-template");
      const cardElement = card.createCard();
      cardList.addItem(cardElement);
    }
  },
  '.elements'
);


cardList.renderItems();

const profileFormValidator = new FormValidator(config, formEditProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, formAddCard);
cardFormValidator.enableValidation();

CreateCardButton.addEventListener("click", () => {  //клик по кнопке создания новой карточки
  popupTypeCard.open(); //открываем попап с формой создания новой карточки
});

editProfileButton.addEventListener('click', () => {  //клик по кнопке редактирования профиля
  popupEditProfile.open();
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.firstname;
  jobInput.value = profileInfo.job;
})

popupWithFormEditProfile.setEventListeners();
popupWithFormCreateCard.setEventListeners();
popupWithImage.setEventListeners();

//popupEditButton.addEventListener("click", openPopupEdit); //клик по кнопке редактирования профиля
//popupCloseTypeProfile.addEventListener("click", closePopupEdit); //клик по кнопке закрытия окна редактирования профиля
//popupCreateCardButton.addEventLsistener("click", openPopupCreateCard); //клик по кнопке добавления карточки
//popupCloseTypeCard.addEventListener("click", closePopupCreateCard); //клик по кнопке закрытия окна добавления карточки
//popupCloseTypeImg.addEventListener("click", closePopupImage); //клик по кнопке закрытия большого изображения
//formEditProfile.addEventListener("submit", handleEditProfileSubmit); //клик по кнопке "Сохранить" в окне редактирования профиля
//formAddCard.addEventListener("submit", handleCreateCardSubmit); //клик по кнопке "Создать" в окне добавления карточки
