const popupElement = document.querySelector('.popup');
const formEditOpenButton = document.querySelector('.edit-button');
const formEditCloseButton = popupElement.querySelector('.form__close_el_edit');
const formAddOpenButton = document.querySelector('.add-button');
const formAddCloseButton = popupElement.querySelector('.form__close_el_add');
const formContainerEdit = popupElement.querySelector('.form__container_el_edit');
const formContainerAdd = popupElement.querySelector('.form__container_el_add');

let profileInfoName = document.querySelector('.profile-info__title');
let profileInfoJob = document.querySelector('.profile-info__subtitle');
let nameInput = document.querySelector('.form__item_el_name');
let jobInput = document.querySelector('.form__item_el_job');

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
  closeFormAdd(evt);
}

formEditOpenButton.addEventListener('click', openFormEdit); //щелчок по кнопке редактирования профиля
formEditCloseButton.addEventListener('click', closeFormEdit); //щелчок по кнопке закрытия окна редактирования профиля
formAddOpenButton.addEventListener('click', openFormAdd);
formAddCloseButton.addEventListener('click', closeFormAdd);
//nameInput.addEventListener('click', clickNameInput); //щелчок по полю ввода "Имя"
//jobInput.addEventListener('click', clickJobInput);   //щелчок по полю ввода "Род занятий"
formContainerEdit.addEventListener('submit', handleFormEditSubmit); //щелчок по кнопке "Сохранить"
formContainerAdd.addEventListener('submit', handleFormAddSubmit);
