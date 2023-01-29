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
const trashButton = document.querySelector('.trash-button');
const profileInfoName = document.querySelector('.profile-info__title');
const profileInfoJob = document.querySelector('.profile-info__subtitle');
const nameInput = document.querySelector('.form__item_el_name');
const jobInput = document.querySelector('.form__item_el_job');
const titleImage = document.querySelector('.form__item_el_title');
const linkImage = document.querySelector('.form__item_el_link');
const heartButton = document.querySelector('.heart-button');

function initCardDefault() {
  initialCards.forEach(function(item) {  //выводим карточки на страницу при загрузке
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__title').textContent = item.name;
    elements.prepend(element);
    //elements.append(element);

    /*const formContainerAdd = popupElement.querySelector('.form__container_el_add');
    formContainerAdd.addEventListener('submit', function(evt) {
      evt.preventDefault();
      element.querySelector('.element__image').src = linkImage.value;
      element.querySelector('.element__title').textContent = titleImage.value;
      elements.prepend(element);
      closeFormAdd();
    });*/  //этот блок кода при добавлении карточек выводит 6 одинаковых карточек. Пока не стал удалять, а просто закомментировал.


    /*const elementImage = document.querySelector('.element__image'); //открываем большое изображение картинки из карточки
    elementImage.addEventListener('click', function() {             //слушатель события(клик по картинке на карточке)
      const bigImage = document.querySelector('.big-image');
      const bigImageCaption = document.querySelector('.big-image__caption');
      openPopup();
      formContainerEdit.classList.remove('form__container_opened');
      formContainerAdd.classList.remove('form__container_opened');
      formContainerImage.classList.add('form__container_opened');
      bigImage.src = item.link;
      bigImageCaption.textContent = item.name;
    });*/ //этот блок кода заменён вызовом функции openBigImage(item) ниже
   /*openBigImage(item);
    addCardLike();  //ставим "лайк" карточке
    addCardTrash(); //удаляем карточку*/
  });
}

function openBigImage(item) {
  const elementImage = document.querySelector('.element__image');
  elementImage.addEventListener('click', function() {
    const formContainerImage = document.querySelector('.form__container_el_image');
    const bigImage = document.querySelector('.big-image');
    const bigImageCaption = document.querySelector('.big-image__caption');
    openPopup();
    formContainerEdit.classList.remove('form__container_opened');
    formContainerAdd.classList.remove('form__container_opened');
    formContainerImage.classList.add('form__container_opened');
    bigImage.src = item.link;
    bigImageCaption.textContent = item.name;
  });
}

function addCardManual(name, link) {
  name = titleImage.value;
  link = linkImage.value;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__title').textContent = name;
  elements.prepend(element);
  //elements.append(element);
  addCardTrash();
  addCardLike();
}

function addCardTrash() {
  const trashButton = document.querySelector('.trash-button');
  trashButton.addEventListener('click', function() {
  const element = trashButton.closest('.element');
  element.remove();
  });
}

function addCardLike () {
  const heartButton = document.querySelector('.heart-button');
  heartButton.addEventListener('click', function() {
    heartButton.classList.toggle('heart-button_activ');
  })
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
imageCloseButton.addEventListener('click', closeFormImage);
formContainerEdit.addEventListener('submit', handleFormEditSubmit); //щелчок по кнопке "Сохранить"
formContainerAdd.addEventListener('submit', handleFormAddSubmit);

//nameInput.addEventListener('click', clickNameInput); //щелчок по полю ввода "Имя"
//jobInput.addEventListener('click', clickJobInput);   //щелчок по полю ввода "Род занятий"
