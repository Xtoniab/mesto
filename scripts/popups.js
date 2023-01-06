const wrappedPopups = {};
const popupWrappers = {};

function openPopup(popup) {
  const popupElement = popup.popupElement;
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', popup.handleEcsPressed);
}

function closePopup(popup) {
  const popupElement = popup.popupElement;
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', popup.handleEcsPressed);
}

function initPopup(popup) {
  popup.closeBtnElement.addEventListener('click', popup.close);
  popup.popupElement.addEventListener('click', popup.handleBackgroundClick);
  return popup;
}

function wrapPopup(popupElement) {
  const wrappedPopup = {
    popupElement: popupElement,
    closeBtnElement: popupElement.querySelector('.popup__close-btn'),
    init: () => initPopup(wrappedPopup),
    open: () => openPopup(wrappedPopup),
    close: () => closePopup(wrappedPopup),
    handleEcsPressed: evt => {
      if (evt.code === "Escape") {
        wrappedPopup.close();
      }
    },
    handleBackgroundClick: evt => {
      if(evt.target.classList.contains('popup__container')){
        wrappedPopup.close();
      }
    }
  }

  return wrappedPopup;
}

function wrapViewPlacePopup(popupElement) {
  const wrappedPopup = wrapPopup(popupElement);
  wrappedPopup.imageElement = popupElement.querySelector(".popup__image");
  wrappedPopup.imageCaptionElement = popupElement.querySelector(".popup__image-caption");
  return wrappedPopup;
}

function initPopupWrappers() {
  popupWrappers[editProfilePopupId] = wrapPopup;
  popupWrappers[addPlacePopupId] = wrapPopup;
  popupWrappers[viewPlacePopupId] = wrapViewPlacePopup;
}

function initPopups() {
  const popups = Array.from(document.querySelectorAll('.popup'));
  popups.forEach(popupElement => {
    const wrapper = popupWrappers[popupElement.id];
    wrappedPopups[popupElement.id] = wrapper(popupElement).init()
  });
}

initPopupWrappers();
initPopups();
