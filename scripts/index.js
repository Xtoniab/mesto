/* ------ Default places ------ */
const defaultPlaces = [
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

/* ------ Edit Profile ------ */

const profileNameElement = document.querySelector('.profile__name');
const profileCaptionElement = document.querySelector('.profile__caption');
const profileEditBtn = document.querySelector('.profile__edit-btn');

const editProfilePopup = document.querySelector('#edit-profile-popup');
const editProfileFormNameInput = editProfilePopup.querySelector('#info-input-name');
const editProfileFormCaptionInput = editProfilePopup.querySelector('#info-input-caption');
const editProfileForm = editProfilePopup.querySelector('.popup__form');

editProfileForm.addEventListener('submit', editProfileFormSubmit);
profileEditBtn.addEventListener('click', openEditProfilePopup);

function editProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileFormNameInput.value;
  profileCaptionElement.textContent = editProfileFormCaptionInput.value;
  closePopup(editProfilePopup);
}

function openEditProfilePopup() {
  editProfileFormNameInput.value = profileNameElement.textContent;
  editProfileFormCaptionInput.value = profileCaptionElement.textContent;
  openPopup(editProfilePopup);
}

/* ------ Add Place ------ */
const addPlaceBtn = document.querySelector('.profile__add-place-btn');

const addPlacePopup = document.querySelector('#add-place-popup');
const addPlaceFormNameInput = addPlacePopup.querySelector('#place-input-name');
const addPlaceFormLinkInput = addPlacePopup.querySelector('#place-input-link');
const addPlaceForm = addPlacePopup.querySelector('.popup__form');
const placeTemplate = document.querySelector('#place').content;
const placesContainer = document.querySelector('.places');

addPlaceForm.addEventListener('submit', addPlaceFormSubmit);
addPlaceBtn.addEventListener('click', openAddPlacePopup);

function openAddPlacePopup() {
  addPlaceFormNameInput.value = '';
  addPlaceFormLinkInput.value = '';
  openPopup(addPlacePopup)
}

function addPlaceFormSubmit(evt) {
  evt.preventDefault();

  const placeInfo = {
    name: addPlaceFormNameInput.value,
    link: addPlaceFormLinkInput.value
  }

  const newPlace = createPlace(placeInfo);
  console.log(newPlace);
  addPlace(newPlace);
  closePopup(addPlacePopup);
}

function addPlace(place) {
  placesContainer.prepend(place);
}

function createPlace(placeInfo) {
  const newPlace = placeTemplate.cloneNode(true).querySelector('.place');
  const newPlaceName = newPlace.querySelector('.place__title');
  const newPlaceImage = newPlace.querySelector('.place__image');
  const removeBtn = newPlace.querySelector('.place__remove-btn');
  const likeBtn = newPlace.querySelector('.place__like-btn');

  newPlaceName.textContent = placeInfo.name;
  newPlaceImage.src = placeInfo.link;
  newPlaceImage.alt = placeInfo.name;

  likeBtn.addEventListener('click', likePressed)
  removeBtn.addEventListener('click', evt => evt.target.closest('.place').remove());
  newPlaceImage.addEventListener('click', () => openViewPlacePopup(placeInfo))
  return newPlace;
}


/* View Place */
const viewPlacePopup = document.querySelector('#view-place-popup');
const viewPlacePopupImage = viewPlacePopup.querySelector(".popup__image");
const viewPlacePopupImageCaption = viewPlacePopup.querySelector(".popup__image-caption");

function openViewPlacePopup(placeInfo) {
  viewPlacePopupImageCaption.textContent = placeInfo.name;
  viewPlacePopupImage.src = placeInfo.link;
  viewPlacePopupImage.alt = placeInfo.name;

  openPopup(viewPlacePopup);
}

/* ------ Likes ------ */

function likePressed(evt) {
  evt.target.classList.toggle('place__like-btn_active');
}


defaultPlaces.map(createPlace).forEach(addPlace);

/* ------ Popup ------ */

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const closeButtons = document.querySelectorAll('.popup__close-btn');

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
