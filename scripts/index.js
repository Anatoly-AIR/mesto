let formElement = document.querySelector('.form');
let formCloseButtonElement = formElement.querySelector('.form__close');
let formOpenButtonElement = document.querySelector('.edit-button');
let profileInfoName = document.querySelector('.profile-info__title');
let profileInfoJob = document.querySelector('.profile-info__subtitle');
let nameInput = document.querySelector('.form__item_el_name');
let jobInput = document.querySelector('.form__item_el_job');
//const heartActiv = document.querySelector('.heart');



function openForm() {
  nameInput.value = profileInfoName.textContent;
  jobInput.value = profileInfoJob.textContent;
  formElement.classList.add('form_opened');
}

function closeForm() {
  formElement.classList.remove('form_opened');
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
  closeForm(evt);
}



formOpenButtonElement.addEventListener('click', openForm); //щелчок по кнопке редактирования профиля
formCloseButtonElement.addEventListener('click', closeForm); //щелчок по кнопке закрытия окна редактирования профиля
//nameInput.addEventListener('click', clickNameInput); //щелчок по полю ввода "Имя"
//jobInput.addEventListener('click', clickJobInput);   //щелчок по полю ввода "Род занятий"
formElement.addEventListener('submit', handleFormSubmit); //щелчок по кнопке "Сохранить"

const cardElement = document.querySelector('.element');
//const cardElementContainer = cardElement.querySelector('.element__container').cloneNode(true);
const cardElementContainer = cardElement.querySelector('.element__container');
/*cardElementContainer.querySelector('.heart').addEventListener('click', function(evt) {
  evt.target.classList.toggle('heart_activ');
});*/
const buttonHeart = cardElementContainer.querySelector('.heart');

buttonHeart.addEventListener('click', function(evt) {
  evt.target.classList.toggle('heart_activ');
  console.log(evt);
});

