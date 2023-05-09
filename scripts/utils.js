export const popup = document.querySelector(".popup_type_image");
export const popupImageSource = popup.querySelector(".popup__image-source");
export const popupImageCaption = popup.querySelector(".popup__image-caption");

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscape);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEscape);
}

export function closePopupEscape (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}
