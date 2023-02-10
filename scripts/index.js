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
const cardElement = cardTemplate.querySelector('.element');
const popupElement = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const popupImage = document.querySelector('.popup_type_image');
const popupContainer = popupElement.querySelector('.popup__container');
const popupImageContainer = popupImage.querySelector('.popup__image-container');
const popupCloseTypeProfile = popupProfile.querySelector('.popup__close_type_profile');
const popupCloseTypeCard = popupCard.querySelector('.popup__close_type_card');
const popupCloseTypeImg = popupImage.querySelector('.popup__close_type_img');
const popupSaveProfile = popupProfile.querySelector('.popup__edit');
const popupCreateCard = popupCard.querySelector('.popup__add');
const profileInfoName = document.querySelector('.profile-info__title');
const profileInfoJob = document.querySelector('.profile-info__subtitle');
const nameInput = document.querySelector('.popup__item_el_name');
const jobInput = document.querySelector('.popup__item_el_job');
const popupImageSource = popupImageContainer.querySelector('.popup__image-source');
const popupImageCaption = popupImageContainer.querySelector('.popup__image-caption');
const popupFormCard = popupCard.querySelector('.popup__add');
const titleImage = popupFormCard.querySelector('.popup__item_el_title');
const linkImage = popupFormCard.querySelector('.popup__item_el_link');

initialCards.forEach(function(item) {  //выводим карточки на страницу при загрузке
  const card = createCard(item.name, item.link);
  cardsContainer.prepend(card);
});

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true); //добавляем карточку
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = name;
  cardElement.querySelector('.element__title').textContent = name;

  const heartButton = cardElement.querySelector('.heart-button');
  heartButton.addEventListener('click', function() { //ставим лайк карточке
    heartButton.classList.toggle('heart-button_activ');
});

  const trashButton = cardElement.querySelector('.trash-button');
  trashButton.addEventListener('click', function() {  //удаляем карточку
    const cardElement = trashButton.closest('.element');
    cardElement.remove();
  });

  const elementImage = cardElement.querySelector('.element__image');
  elementImage.addEventListener('click', function() {  //открываем большую фотографию карточки
    openPopup(popupImage);
    popupImageSource.src = link;
    popupImageSource.alt = name;
    popupImageCaption.textContent = name;
  });
  return cardElement;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

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

function handleCreateCardSubmit(evt) {
  evt.preventDefault();
  const imgName = titleImage.value;
  const imgLink = linkImage.value;
  const card = createCard(imgName, imgLink);
  cardsContainer.prepend(card);
  titleImage.value = '';
  linkImage.value = '';
  closePopupCreateCard(evt);
}

popupEditButton.addEventListener('click', openPopupEdit);   //клик по кнопке редактирования профиля
popupCloseTypeProfile.addEventListener('click', closePopupEdit); //клик по кнопке закрытия окна редактирования профиля
popupCreateCardButton.addEventListener('click', openPopupCreateCard);     //клик по кнопке добавления карточки
popupCloseTypeCard.addEventListener('click', closePopupCreateCard);   //клик по кнопке закрытия окна добавления карточки
popupCloseTypeImg.addEventListener('click', closePopupImage);   //клик по кнопке закрытия большого изображения
popupSaveProfile.addEventListener('submit', handleEditProfileSubmit); //клик по кнопке "Сохранить" в окне редактирования профиля
popupCreateCard.addEventListener('submit', handleCreateCardSubmit);   //клик по кнопке "Создать" в окне добавления карточки
