export const initialCards = [
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

export const popup = document.querySelector(".popup_type_image");
export const popupImageSource = popup.querySelector(".popup__image-source");
export const popupImageCaption = popup.querySelector(".popup__image-caption");
export const profile = document.querySelector(".profile");
export const popupEditButton = profile.querySelector(".edit-button");
export const popupAddCardButton = profile.querySelector(".add-button");
export const editProfileButton = profile.querySelector(".edit-button");
export const CreateCardButton = profile.querySelector(".add-button");
export const popupProfile = document.querySelector(".popup_type_profile");
export const popupCard = document.querySelector(".popup_type_card");
export const formEditProfile = popupProfile.querySelector(".popup__form_type_edit");
export const formAddCard = popupCard.querySelector(".popup__form_type_add");
export const nameInput = document.querySelector(".popup__input_el_name");
export const jobInput = document.querySelector(".popup__input_el_job");
export const titleImage = formAddCard.querySelector(".popup__input_el_title");
export const linkImage = formAddCard.querySelector(".popup__input_el_link");
export const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.submit-button',
  inactivButtonClass: 'submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_activ'
}
