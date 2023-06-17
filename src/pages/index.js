import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from "../components/FormValidator.js";
import { initialCards, config } from "../utils/utils.js";
import {Section} from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { editProfileButton, CreateCardButton, formEditProfile, formAddCard, nameInput, jobInput, titleImage, linkImage } from "../utils/utils.js";

const userInfo = new UserInfo({
  profileNameSelector: '.profile-info__title',
  profileJobSelector: '.profile-info__subtitle'
});

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
    cardList.renderer({name: data.title, link: data.link});
  }
});

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = new Card({
      data,
      handleCardClick: () => {
        popupWithImage.open({name: data.name, link: data.link});
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
  popupWithFormCreateCard.open(); //открываем попап с формой создания новой карточки
});

editProfileButton.addEventListener('click', () => {  //клик по кнопке редактирования профиля
  popupWithFormEditProfile.open(); //открываем попап с формой редактирования профиля
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.firstname;
  jobInput.value = profileInfo.job;
})

popupWithFormEditProfile.setEventListeners();
popupWithFormCreateCard.setEventListeners();
popupWithImage.setEventListeners();
