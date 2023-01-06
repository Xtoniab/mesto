
/* ------ Edit Profile ------ */

const profileNameElement = document.querySelector('.profile__name');
const profileCaptionElement = document.querySelector('.profile__caption');
const profileEditBtn = document.querySelector('.profile__edit-btn');

const editProfilePopup = wrappedPopups[editProfilePopupId];
const editProfileForm = wrappedForms[editProfileFormId];

function editProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileForm.nameInputElement.value;
  profileCaptionElement.textContent = editProfileForm.captionInputElement.value;
  editProfilePopup.close();
}

function openEditProfilePopup() {
  editProfileForm.nameInputElement.value = profileNameElement.textContent;
  editProfileForm.captionInputElement.value = profileCaptionElement.textContent;

  editProfileForm.toggleButtonState();
  editProfileForm.hideErrors();

  editProfilePopup.open();
}

editProfileForm.formElement.addEventListener('submit', editProfileFormSubmit);
profileEditBtn.addEventListener('click', openEditProfilePopup);


/* ------ Add Place ------ */
const addPlaceBtn = document.querySelector('.profile__add-place-btn');

const addPlacePopup = wrappedPopups[addPlacePopupId];
const addPlaceForm = wrappedForms[addPlaceFormId];

const placeTemplate = document.querySelector('#place').content;
const placesContainer = document.querySelector('.places');

function openAddPlacePopup() {
  addPlaceForm.formElement.reset();
  addPlaceForm.hideErrors();
  addPlaceForm.toggleButtonState();
  addPlacePopup.open();
}

function addPlace(place) {
  placesContainer.prepend(place);
}

function createPlace(placeInfo) {
  const newPlace = placeTemplate.querySelector('.place').cloneNode(true);
  const newPlaceName = newPlace.querySelector('.place__title');
  const newPlaceImage = newPlace.querySelector('.place__image');
  const removeBtn = newPlace.querySelector('.place__remove-btn');
  const likeBtn = newPlace.querySelector('.place__like-btn');

  newPlaceName.textContent = placeInfo.name;
  newPlaceImage.src = placeInfo.link;
  newPlaceImage.alt = placeInfo.name;

  likeBtn.addEventListener('click', likePressed)
  removeBtn.addEventListener('click', evt => newPlace.remove());
  newPlaceImage.addEventListener('click', () => openViewPlacePopup(placeInfo))
  return newPlace;
}

function addPlaceFormSubmit(evt) {
  evt.preventDefault();

  const placeInfo = {
    name: addPlaceForm.nameInputElement.value,
    link: addPlaceForm.linkInputElement.value
  }

  const newPlace = createPlace(placeInfo);
  addPlace(newPlace);
  addPlacePopup.close();
}

addPlaceForm.formElement.addEventListener('submit', addPlaceFormSubmit);
addPlaceBtn.addEventListener('click', openAddPlacePopup);

/* View Place */
const viewPlacePopup = wrappedPopups[viewPlacePopupId];

function openViewPlacePopup(placeInfo) {
  viewPlacePopup.imageCaptionElement.textContent = placeInfo.name;
  viewPlacePopup.imageElement.src = placeInfo.link;
  viewPlacePopup.imageElement.alt = placeInfo.name;

  viewPlacePopup.open();
}

/* ------ Likes ------ */

function likePressed(evt) {
  evt.target.classList.toggle('place__like-btn_active');
}


defaultPlaces.forEach(place => addPlace(createPlace(place)));
