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
