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

const profile = document.querySelector('.profile');
const popupEditButton = profile.querySelector('.edit-button');
const popupCreateCardButton = profile.querySelector('.add-button');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element-template').content;
const popupElement = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const popupBigImage = document.querySelector('.popup_type_image');
const popupContainer = popupElement.querySelector('.popup__container');
const popupCloseTypeProfile = popupProfile.querySelector('.popup__close_type_profile');
const popupCloseTypeCard = popupCard.querySelector('.popup__close_type_card');
const popupCloseTypeImg = popupBigImage.querySelector('.popup__close_type_img');
const popupEditCloseButton = popupElement.querySelector('.popup__close');
const popupAddCloseButton = popupElement.querySelector('.popup__close');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupCreateCard = document.querySelector('.popup_type_card');
const imageCloseButton = popupElement.querySelector('.popup__close');
const profileInfoName = document.querySelector('.profile-info__title');
const profileInfoJob = document.querySelector('.profile-info__subtitle');
const nameInput = document.querySelector('.popup__item_el_name');
const jobInput = document.querySelector('.popup__item_el_job');

initialCards.forEach(function(item) {  //выводим карточки на страницу при загрузке
  addCard(item.name, item.link);
});

function addCard(name, link) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);//добавляем карточку
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__title').textContent = name;
  cardsContainer.prepend(cardElement);
  //cardsContainer.append(cardElement);
  const heartButton = cardElement.querySelector('.heart-button');//ставим лайк карточке
  heartButton.addEventListener('click', function() {
    heartButton.classList.toggle('heart-button_activ');
});
  const trashButton = cardElement.querySelector('.trash-button');//удаляем карточку
  trashButton.addEventListener('click', function() {
    const cardElement = trashButton.closest('.element');
    cardElement.remove();
  });
  const elementImage = cardElement.querySelector('.element__image');//открываем большую фотографию карточки
  elementImage.addEventListener('click', function() {
    const bigImage = popupBigImage.querySelector('.big-image__here');
    const bigImageCaption = popupBigImage.querySelector('.big-image__caption');
    popupBigImage.classList.add('popup_opened');
    bigImage.src = link;
    bigImageCaption.textContent = name;
  });
}

function openPopup() {
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function openPopupEdit() {
  nameInput.value = profileInfoName.textContent;
  jobInput.value = profileInfoJob.textContent;
  popupProfile.classList.add('popup_opened');
}

function closePopupEdit() {
  popupProfile.classList.remove('popup_opened');
}

function openPopupCreateCard() {
  popupCard.classList.add('popup_opened');
}

function closePopupCreateCard() {
  popupCard.classList.remove('popup_opened');
}

function closePopupImage() {
  popupBigImage.classList.remove('popup_opened');;
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = nameInput.value;
  profileInfoJob.textContent = jobInput.value;
  closePopupEdit(evt);
}

function handleCreateCardSubmit(evt) {
  const popupFormCard = popupCard.querySelector('.popup__add');
  const titleImage = popupFormCard.querySelector('.popup__item_el_title');
  const linkImage = popupFormCard.querySelector('.popup__item_el_link');
  evt.preventDefault();
  const imgName = titleImage.value;
  const imgLink = linkImage.value;
  addCard(imgName, imgLink);
  closePopupCreateCard(evt);
}

popupEditButton.addEventListener('click', openPopupEdit);   //клик по кнопке редактирования профиля
popupCloseTypeProfile.addEventListener('click', closePopupEdit); //клик по кнопке закрытия окна редактирования профиля
popupCreateCardButton.addEventListener('click', openPopupCreateCard);     //клик по кнопке добавления карточки
popupCloseTypeCard.addEventListener('click', closePopupCreateCard);   //клик по кнопке закрытия окна добавления карточки
imageCloseButton.addEventListener('click', closePopupImage);   //клик по кнопке закрытия большого изображения
popupEditProfile.addEventListener('submit', handleEditProfileSubmit); //клик по кнопке "Сохранить" в окне редактирования профиля
popupCreateCard.addEventListener('submit', handleCreateCardSubmit);   //клик по кнопке "Создать" в окне добавления карточки
