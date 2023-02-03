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

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;
const popupElement = document.querySelector('.popup');
const formContainer = popupElement.querySelector('.form__container');
const formAdd = formContainer.querySelector('.form__add');
const formEditOpenButton = document.querySelector('.edit-button');
const formEditCloseButton = popupElement.querySelector('.form__close_el_edit');
const formAddOpenButton = document.querySelector('.add-button');
const formAddCloseButton = popupElement.querySelector('.form__close_el_add');
const formContainerEdit = popupElement.querySelector('.form__container_el_edit');
const formContainerAdd = popupElement.querySelector('.form__container_el_add');
const formContainerImage = popupElement.querySelector('.form__container_el_image');
const imageCloseButton = popupElement.querySelector('.form__close_el_image');
const profileInfoName = document.querySelector('.profile-info__title');
const profileInfoJob = document.querySelector('.profile-info__subtitle');
const nameInput = document.querySelector('.form__item_el_name');
const jobInput = document.querySelector('.form__item_el_job');

initialCards.forEach(function(item) {  //выводим карточки на страницу при загрузке
  addCard(item.name, item.link);
});

function addCard(name, link) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);//добавляем карточку
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__title').textContent = name;
  elements.prepend(element);
  //elements.append(element);
  const heartButton = element.querySelector('.heart-button');//ставим лайк карточке
  heartButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('heart-button_activ');
    console.log(evt.target);
  });
  const trashButton = element.querySelector('.trash-button');//удаляем карточку
  trashButton.addEventListener('click', function() {
    const element = trashButton.closest('.element');
    element.remove();
  });
  const elementImage = element.querySelector('.element__image');//открываем большую фотографию карточки
  elementImage.addEventListener('click', function() {
    const formContainerImage = popupElement.querySelector('.form__container_el_image');
    const bigImage = popupElement.querySelector('.big-image');
    const bigImageCaption = popupElement.querySelector('.big-image__caption');
    openPopup();
    formContainerEdit.classList.remove('form__container_opened');
    formContainerAdd.classList.remove('form__container_opened');
    formContainerImage.classList.add('form__container_opened');
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

function openFormEdit() {
  nameInput.value = profileInfoName.textContent;
  jobInput.value = profileInfoJob.textContent;
  openPopup();
  formContainerAdd.classList.remove('form__container_opened');
  formContainerImage.classList.remove('form__container_opened');
  formContainerEdit.classList.add('form__container_opened');
}

function closeFormEdit() {
  closePopup();
}

function openFormAdd() {
  openPopup();
  formContainerEdit.classList.remove('form__container_opened');
  formContainerImage.classList.remove('form__container_opened');
  formContainerAdd.classList.add('form__container_opened');
}

function closeFormAdd() {
  closePopup();
}

function closeFormImage() {
  closePopup();
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = nameInput.value;
  profileInfoJob.textContent = jobInput.value;
  closeFormEdit(evt);
}

function handleFormAddSubmit(evt) {
  const formContainerAdd = popupElement.querySelector('.form__container_el_add');
  const titleImage = formContainerAdd.querySelector('.form__item_el_title');
  const linkImage = formContainerAdd.querySelector('.form__item_el_link');
  evt.preventDefault();
  const imgName = titleImage.value;
  const imgLink = linkImage.value;
  addCard(imgName, imgLink);
  closeFormAdd(evt);
}

formEditOpenButton.addEventListener('click', openFormEdit);   //клик по кнопке редактирования профиля
formEditCloseButton.addEventListener('click', closeFormEdit); //клик по кнопке закрытия окна редактирования профиля
formAddOpenButton.addEventListener('click', openFormAdd);     //клик по кнопке добавления карточки
formAddCloseButton.addEventListener('click', closeFormAdd);   //клик по кнопке закрытия окна добавления карточки
imageCloseButton.addEventListener('click', closeFormImage);   //клик по кнопке закрытия большого изображения
formContainerEdit.addEventListener('submit', handleFormEditSubmit); //клик по кнопке "Сохранить" в окне редактирования профиля
formContainerAdd.addEventListener('submit', handleFormAddSubmit);   //клик по кнопке "Создать" в окне добавления карточки
