import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from "../components/FormValidator.js";
import { config } from "../utils/utils.js";
import {Section} from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import {
   profileInfoTitle,
   profileInfoSubtitle,
   profileAvatar,
   editProfileButton,
   CreateCardButton,
   formEditProfile,
   formEditAvatar,
   formAddCard,
   nameInput,
   jobInput } from "../utils/utils.js";
import { Api } from "../components/Api.js"
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';

let myId = ''; //переменная для собственного id

const api = new Api({
  baseURL: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '6f22b05a-f56f-47e3-814e-73e7e1c90507',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
  .then((res) => {
    myId = res._id;
    profileInfoTitle.textContent = res.name;
    profileInfoSubtitle.textContent = res.about;
    profileAvatar.src = res.avatar;

  })
  .catch((err) => {
    console.log('Ошибка запроса', err);
  })

const arrayCards = await api.getInitialCards();

const userInfo = new UserInfo({
  profileNameSelector: '.profile-info__title',
  profileJobSelector: '.profile-info__subtitle',
  profileAvatarSelector: '.profile__avatar'
});

const popupWithImage = new PopupWithImage('.popup_type_image');

/*const popupWithFormEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (data) => {
    api.handleEditProfile(data)
    .then(data => {
      userInfo.setUserInfo(data);
    })
    .catch((error) => console.error(`ошибка ${error}`))
    .finally();
  }
});*/

const popupWithFormEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (data) => {
    api.handleEditProfile(data)
    userInfo.setUserInfo(data);
  }
});

const popupWithFormEditAvatar = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleFormSubmit: (data) => {
    api.handleEditAvatar(data)
    userInfo.setUserAvatar(data);
  }
})

const popupWithFormCreateCard = new PopupWithForm({
  popupSelector: '.popup_type_card',
  handleFormSubmit: (data) => {
    api.handleAddCard(data)
    cardList.addItem(data);
  }
});

const popupWithFormDelCard = new PopupWithConfirmation({
  popupSelector: '.popup_type_delete-card',
  submitFunction: (cardId) => {
    api.handleDeleteCard(cardId);
    api.getInitialCards();
    popupWithFormDelCard.close();
    cardList.renderItems();
  }
});

const cardList = new Section({
  items: arrayCards,
  renderer: (data) => {
    const card = new Card({
      data,
      handleCardClick: (name, link) => { //открываем попап с увеличенным изображением карточки
        popupWithImage.open({name, link});
      },
      handleCardLike: (_id) => {
        if(card.isLiked()) {  //удаляем лайк с карточки
          api.handleDeleteLikeCard(data._id)
          .then((res) => {
            card.handleDislikeCard(res.likes.length);
          })
          .catch((error) => console.error(`ошибка ${error}`));
        }
        else {  //ставим лайк карточке
          api.handleAddLikeCard(data._id)
            .then((res) => {
              card.handleLikeCard(res.likes.length);
            })
            .catch((error) => console.error(`ошибка ${error}`));
        }
      },
      handleCardDeleteOpen: (_id) => {
        popupWithFormDelCard.open(data._id);
      },
      myId
    },
     "#element-template");
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

const editAvatarFormValidator = new FormValidator(config, formEditAvatar);
editAvatarFormValidator.enableValidation();

CreateCardButton.addEventListener("click", () => {  //клик по кнопке создания новой карточки
  popupWithFormCreateCard.open(); //открываем попап с формой создания новой карточки
});

editProfileButton.addEventListener('click', () => {  //клик по кнопке редактирования профиля
  popupWithFormEditProfile.open(); //открываем попап с формой редактирования профиля
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.firstname;
  jobInput.value = profileInfo.job;
})

profileAvatar.addEventListener('click', () => {  //клик по аватарке в профиле
  popupWithFormEditAvatar.open();  //открываем попап с формой редактирования аватарки
})

popupWithFormEditProfile.setEventListeners();
popupWithFormEditAvatar.setEventListeners();
popupWithFormCreateCard.setEventListeners();
popupWithImage.setEventListeners();
popupWithFormDelCard.setEventListeners();
