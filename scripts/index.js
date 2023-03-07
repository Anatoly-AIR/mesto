const profile = document.querySelector(".profile");
const popupEditButton = profile.querySelector(".edit-button");
const popupCreateCardButton = profile.querySelector(".add-button");
const cardsContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template").content;
const cardElement = cardTemplate.querySelector(".element");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupImage = document.querySelector(".popup_type_image");
const popupImageContainer = popupImage.querySelector(".popup__image-container");
const popupCloseTypeProfile = popupProfile.querySelector(".popup__close_type_profile");
const popupCloseTypeCard = popupCard.querySelector(".popup__close_type_card");
const popupCloseTypeImg = popupImage.querySelector(".popup__close_type_img");
const formEditProfile = popupProfile.querySelector(".form__edit");
const formAddCard = popupCard.querySelector(".form__add");
const profileInfoName = document.querySelector(".profile-info__title");
const profileInfoJob = document.querySelector(".profile-info__subtitle");
const nameInput = document.querySelector(".form__input_el_name");
const jobInput = document.querySelector(".form__input_el_job");
const popupImageSource = popupImageContainer.querySelector(".popup__image-source");
const popupImageCaption = popupImageContainer.querySelector(".popup__image-caption");
const titleImage = formAddCard.querySelector(".form__input_el_title");
const linkImage = formAddCard.querySelector(".form__input_el_link");

//выводим карточки на страницу при загрузке
initialCards.forEach(function (item) {
  const card = createCard(item.name, item.link);
  cardsContainer.prepend(card);
});

//добавляем карточку
function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".element__image").src = link;
  cardElement.querySelector(".element__image").alt = name;
  cardElement.querySelector(".element__title").textContent = name;

  //ставим лайк карточке
  const heartButton = cardElement.querySelector(".heart-button");
  heartButton.addEventListener("click", function () {
    heartButton.classList.toggle("heart-button_activ");
  });

  //удаляем карточку
  const trashButton = cardElement.querySelector(".trash-button");
  trashButton.addEventListener("click", function () {
    const cardElement = trashButton.closest(".element");
    cardElement.remove();
  });

  //открываем большую фотографию карточки
  const elementImage = cardElement.querySelector(".element__image");
  elementImage.addEventListener("click", function () {
    openPopup(popupImage);
    popupImageSource.src = link;
    popupImageSource.alt = name;
    popupImageCaption.textContent = name;
  });

  return cardElement;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopupEdit() {
  //nameInput.value = profileInfoName.textContent;
  //jobInput.value = profileInfoJob.textContent;
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
  titleImage.value = "";
  linkImage.value = "";
  closePopupCreateCard();
}

popupEditButton.addEventListener("click", openPopupEdit); //клик по кнопке редактирования профиля
popupCloseTypeProfile.addEventListener("click", closePopupEdit); //клик по кнопке закрытия окна редактирования профиля
popupCreateCardButton.addEventListener("click", openPopupCreateCard); //клик по кнопке добавления карточки
popupCloseTypeCard.addEventListener("click", closePopupCreateCard); //клик по кнопке закрытия окна добавления карточки
popupCloseTypeImg.addEventListener("click", closePopupImage); //клик по кнопке закрытия большого изображения
formEditProfile.addEventListener("submit", handleEditProfileSubmit); //клик по кнопке "Сохранить" в окне редактирования профиля
formAddCard.addEventListener("submit", handleCreateCardSubmit); //клик по кнопке "Создать" в окне добавления карточки
