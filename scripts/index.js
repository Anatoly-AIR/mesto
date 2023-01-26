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
const formEditOpenButton = document.querySelector('.edit-button');
const formEditCloseButton = popupElement.querySelector('.form__close_el_edit');
const formAddOpenButton = document.querySelector('.add-button');
const formAddCloseButton = popupElement.querySelector('.form__close_el_add');
const formContainerEdit = popupElement.querySelector('.form__container_el_edit');
const formContainerAdd = popupElement.querySelector('.form__container_el_add');
const formContainerImage = popupElement.querySelector('.form__container_el_image');
const imageCloseButton = popupElement.querySelector('.form__close_el_image');
const elementImage = elementTemplate.querySelector('.element__image');
//const trashIcon = elementTemplate.querySelector('.trash-icon');
const trashButton = document.querySelector('.trash-button');
const profileInfoName = document.querySelector('.profile-info__title');
const profileInfoJob = document.querySelector('.profile-info__subtitle');
const nameInput = document.querySelector('.form__item_el_name');
const jobInput = document.querySelector('.form__item_el_job');
const titleImage = document.querySelector('.form__item_el_title');
const linkImage = document.querySelector('.form__item_el_link');
//const heartActiv = document.querySelector('.heart');

function initCardDefault() {
  initialCards.forEach(function(item) {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__title').textContent = item.name;
    elements.prepend(element);

    const trashButton = document.querySelector('.trash-button');
    trashButton.addEventListener('click', function() {
    const element = trashButton.closest('.element');
    element.remove();
    });
  });
}

function addCardManual(name, link) {
  name = titleImage.value;
  link = linkImage.value;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__title').textContent = name;
  elements.prepend(element);
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
  formContainerEdit.classList.add('form__container_opened');
  formContainerAdd.classList.remove('form__container_opened');
  //formContainerImage.classList.add('form__container_opened');
}

function closeFormEdit() {
  closePopup();
}

function openFormAdd() {
  openPopup();
  formContainerEdit.classList.remove('form__container_opened');
  formContainerAdd.classList.add('form__container_opened');
}

function closeFormAdd() {
  closePopup();
}

function openFormImage() {
  openPopup();
  formContainerEdit.classList.remove('form__container_opened');
  formContainerAdd.classList.remove('form__container_opened');
  formContainerImage.classList.add('form__container_opened');
}

function closeFormImage() {
  closePopup();
}

//очищаем поле ввода "Имя"
/*function clickNameInput() {
  nameInput.value = '';
}*/

//очищаем поле ввода "Род занятий"
/*function clickJobInput() {
  jobInput.value = '';
}*/

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = nameInput.value;
  profileInfoJob.textContent = jobInput.value;
  closeFormEdit(evt);
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  addCardManual();
  closeFormAdd(evt);
}

initCardDefault();

formEditOpenButton.addEventListener('click', openFormEdit); //щелчок по кнопке редактирования профиля
formEditCloseButton.addEventListener('click', closeFormEdit); //щелчок по кнопке закрытия окна редактирования профиля
formAddOpenButton.addEventListener('click', openFormAdd);
formAddCloseButton.addEventListener('click', closeFormAdd);
elementImage.addEventListener('click', openFormImage);
imageCloseButton.addEventListener('click', closeFormImage);
formContainerEdit.addEventListener('submit', handleFormEditSubmit); //щелчок по кнопке "Сохранить"
formContainerAdd.addEventListener('submit', handleFormAddSubmit);
/*const trashButton = document.querySelector('.trash-button');
  trashButton.addEventListener('click', function() {
    const element = trashButton.closest('.element');
    element.remove();
    console.log('element deleted');
  });*/

//nameInput.addEventListener('click', clickNameInput); //щелчок по полю ввода "Имя"
//jobInput.addEventListener('click', clickJobInput);   //щелчок по полю ввода "Род занятий"
