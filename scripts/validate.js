const popupEdit = document.querySelector(".popup__edit");
//const nameInputProfile = popupEdit.querySelector(".popup__item_el_name");
const nameInputProfile = popupEdit.querySelector(".popup__item");
const nameInputError = popupEdit.querySelector(`.${nameInputProfile.id}-error`);

function showInputError (element) {
  element.classList.add('popup__item_type_error');
  nameInputError.textContent = 'Вы пропустили это поле';
  //nameInputError.classList.add('popup__item_el_name-error_activ');
  nameInputError.classList.add('popup__item-error_activ');
}

function hideInputError (element) {
  element.classList.remove('popup__item_type_error');
  nameInputError.textContent = '';
  //nameInputError.classList.add('popup__item_el_name-error_activ');
  nameInputError.classList.remove('popup__item-error_activ');
}

function isValid () {
  if (!nameInputProfile.validity.valid) {
    showInputError (nameInputProfile);
  }else {
    hideInputError (nameInputProfile)
  }
}

nameInputProfile.addEventListener ('input', isValid);
