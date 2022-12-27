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
const editProfilePopupCloseBtn = editProfilePopup.querySelector('.popup__close-btn');
const editProfileFormNameInput = editProfilePopup.querySelector('#info-input-name');
const editProfileFormCaptionInput = editProfilePopup.querySelector('#info-input-caption');
const editProfileForm = editProfilePopup.querySelector('.popup__form');

editProfileForm.addEventListener('submit', editProfileFormSubmit);
profileEditBtn.addEventListener('click', openEditProfilePopup);
editProfilePopupCloseBtn.addEventListener('click', closeEditProfilePopup);

function editProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileFormNameInput.value;
  profileCaptionElement.textContent = editProfileFormCaptionInput.value;
  closeEditProfilePopup();
}

function openEditProfilePopup() {
  editProfileFormNameInput.value = profileNameElement.textContent;
  editProfileFormCaptionInput.value = profileCaptionElement.textContent;
  editProfilePopup.classList.add('popup_opened');
}

function closeEditProfilePopup() {
  editProfilePopup.classList.remove('popup_opened');
}

/* ------ Add Place ------ */
const addPlaceBtn = document.querySelector('.profile__add-place-btn');

const addPlacePopup = document.querySelector('#add-place-popup');
const addPlacePopupCloseBtn = addPlacePopup.querySelector('.popup__close-btn');
const addPlaceFormNameInput = addPlacePopup.querySelector('#place-input-name');
const addPlaceFormLinkInput = addPlacePopup.querySelector('#place-input-link');
const addPlaceForm = addPlacePopup.querySelector('.popup__form');
const placeTemplate = document.querySelector('#place').content;
const placesContainer = document.querySelector('.places');

addPlaceForm.addEventListener('submit', addPlaceFormSubmit);
addPlaceBtn.addEventListener('click', openAddPlacePopup);
addPlacePopupCloseBtn.addEventListener('click', closeAddPlacePopup);

function openAddPlacePopup() {
  addPlaceFormNameInput.value = '';
  addPlaceFormLinkInput.value = '';
  addPlacePopup.classList.add('popup_opened');
}

function addPlaceFormSubmit(evt){
  evt.preventDefault();
  addPlace(addPlaceFormNameInput.value, addPlaceFormLinkInput.value);
  closeAddPlacePopup();
}

function closeAddPlacePopup() {
  addPlacePopup.classList.remove('popup_opened');
}

function addPlace(name, link){
  const newPlace = placeTemplate.cloneNode(true).querySelector('.place');
  const newPlaceName = newPlace.querySelector('.place__title');
  const newPlaceImage = newPlace.querySelector('.place__image');
  const removeBtn = newPlace.querySelector('.place__remove-btn');
  const likeBtn = newPlace.querySelector('.place__like-btn');

  newPlaceName.textContent = name;
  newPlaceImage.src = link;
  newPlaceImage.alt = name;

  likeBtn.addEventListener('click', likePressed)
  removeBtn.addEventListener('click', evt => evt.target.closest('.place').remove());
  newPlaceImage.addEventListener('click', () => openViewPlacePopup(name, link))

  placesContainer.append(newPlace);
}


/* View Place */
const viewPlacePopup = document.querySelector('#view-place-popup');
const viewPlacePopupCloseBtn = viewPlacePopup.querySelector('.popup__close-btn');;
const viewPlacePopupImage = viewPlacePopup.querySelector(".popup__image");
const viewPlacePopupImageCaption = viewPlacePopup.querySelector(".popup__image-caption");

viewPlacePopupCloseBtn.addEventListener('click', closeViewPlacePopup);

function openViewPlacePopup(name, link){
  viewPlacePopupImageCaption.textContent = name;
  viewPlacePopupImage.src = link;
  viewPlacePopupImage.alt = name;

  viewPlacePopup.classList.add('popup_opened');
}

function closeViewPlacePopup(){
  viewPlacePopup.classList.remove('popup_opened');
}

/* ------ Likes ------ */

function likePressed(evt){
  evt.target.classList.toggle('place__like-btn_active');
}


defaultPlaces.forEach(placeInfo => addPlace(placeInfo.name, placeInfo.link));
