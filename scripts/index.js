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
const popupContainer = popupElement.querySelector('.popup__container');
//const popupAdd = popupContainer.querySelector('.popup__add');
const popupEditCloseButton = popupElement.querySelector('.popup__close');
const popupAddCloseButton = popupElement.querySelector('.popup__close');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupCreateCard = document.querySelector('.popup_type_card');
const popupContainerImage = document.querySelector('.popup_type_image');
const imageCloseButton = popupElement.querySelector('.popup__close');
const profileInfoName = document.querySelector('.profile-info__title');
const profileInfoJob = document.querySelector('.profile-info__subtitle');
const nameInput = document.querySelector('.popup__item_el_name');
const jobInput = document.querySelector('.popup__item_el_job');

initialCards.forEach(function(item) {  //выводим карточки на страницу при загрузке
  addCard(item.name, item.link);
});

function addCard(name, link) {
  const element = cardTemplate.querySelector('.element').cloneNode(true);//добавляем карточку
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__title').textContent = name;
  //cardsContainer.prepend(element);
  cardsContainer.append(element);
  const heartButton = element.querySelector('.heart-button');//ставим лайк карточке
    heartButton.addEventListener('click', function() {
    heartButton.classList.toggle('heart-button_activ');
});
  const trashButton = element.querySelector('.trash-button');//удаляем карточку
  trashButton.addEventListener('click', function() {
    const element = trashButton.closest('.element');
    element.remove();
  });
  const elementImage = element.querySelector('.element__image');//открываем большую фотографию карточки
  elementImage.addEventListener('click', function() {
    //const popupContainerImage = document.querySelector('.popup_type_image');
    const bigImage = popupElement.querySelector('.big-image__here');
    const bigImageCaption = popupElement.querySelector('.big-image__caption');
    //openPopup();
    popupContainerImage.classList.add('popup_opened');
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
  closePopup();
}

function openPopupCreateCard() {
  popupCard.classList.add('popup_opened');
}

function closePopupCreateCard() {
  popupCard.classList.remove('popup_opened');
  popupElement.classList.remove('popup_opened');
  //closePopup();
}

function closeFormImage() {
  closePopup();
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = nameInput.value;
  profileInfoJob.textContent = jobInput.value;
  closePopupEdit(evt);
}

function handleCreateCardSubmit(evt) {
  const formContainerAdd = popupElement.querySelector('.form__container_el_add');
  const titleImage = formContainerAdd.querySelector('.form__item_el_title');
  const linkImage = formContainerAdd.querySelector('.form__item_el_link');
  evt.preventDefault();
  const imgName = titleImage.value;
  const imgLink = linkImage.value;
  addCard(imgName, imgLink);
  closeFormAdd(evt);
}

popupEditButton.addEventListener('click', openPopupEdit);   //клик по кнопке редактирования профиля
popupEditCloseButton.addEventListener('click', closePopupEdit); //клик по кнопке закрытия окна редактирования профиля
popupCreateCardButton.addEventListener('click', openPopupCreateCard);     //клик по кнопке добавления карточки
popupAddCloseButton.addEventListener('click', closePopupCreateCard);   //клик по кнопке закрытия окна добавления карточки
imageCloseButton.addEventListener('click', closeFormImage);   //клик по кнопке закрытия большого изображения
popupEditProfile.addEventListener('submit', handleEditProfileSubmit); //клик по кнопке "Сохранить" в окне редактирования профиля
popupCreateCard.addEventListener('submit', handleCreateCardSubmit);   //клик по кнопке "Создать" в окне добавления карточки
