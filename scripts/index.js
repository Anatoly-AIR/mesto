let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let popupOpenButtonElement = document.querySelector('.edit-button');
let profileInfoName = document.querySelector('.profile-info__title');
let profileInfoJob = document.querySelector('.profile-info__subtitle');
let nameInput = document.querySelector('.popup__item_name');
let jobInput = document.querySelector('.popup__item_job');
// let submitButton = document.querySelector('.submit-button');

function openPopup() {
  nameInput.value = profileInfoName.textContent;
  jobInput.value = profileInfoJob.textContent;
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  //evt.preventDefault();
  popupElement.classList.remove('popup_opened');
}

//очищаем поле ввода "Имя"
/*function clickNameInput() {
  nameInput.value = '';
}*/

//очищаем поле ввода "Род занятий"
/*function clickJobInput() {
  jobInput.value = '';
}*/

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = nameInput.value;
  profileInfoJob.textContent = jobInput.value;
  closePopup(evt);
}

popupOpenButtonElement.addEventListener('click', openPopup); //щелчок по кнопке редактирования профиля
popupCloseButtonElement.addEventListener('click', closePopup); //щелчок по кнопке закрытия окна редактирования профиля
//nameInput.addEventListener('click', clickNameInput); //щелчок по полю ввода "Имя"
//jobInput.addEventListener('click', clickJobInput);   //щелчок по полю ввода "Род занятий"
submitButton.addEventListener('click', handleFormSubmit); //щелчок по кнопке "Сохранить"
