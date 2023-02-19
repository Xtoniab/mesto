import { Card } from './card.js';
import * as all from './Form/FormValidator.js'
import { AddPlacePopup } from './popup/AddPlacePopup.js';
import { EditProfilePopup } from './popup/EditProfilePopup.js';
import { ViewPlacePopup } from './popup/ViewPlacePopup.js';

/* ------ Edit Profile ------ */

const editProfilePopupElement = document.querySelector('#edit-profile-popup');
const editProfilePopup = new EditProfilePopup(editProfilePopupElement, onProfileEdit).init();

const profileNameElement = document.querySelector('.profile__name');
const profileCaptionElement = document.querySelector('.profile__caption');
const profileEditBtn = document.querySelector('.profile__edit-btn');

function onProfileEdit(newInfo) {
  profileNameElement.textContent = newInfo.name;
  profileCaptionElement.textContent = newInfo.caption;
  editProfilePopup.close();
}

profileEditBtn.addEventListener('click', () => editProfilePopup.open());


/* ------ Add Place ------ */
const addPlaceBtn = document.querySelector('.profile__add-place-btn');

const addPlacePopupElement = document.querySelector('#add-place-popup');
const addPlacePopup = new AddPlacePopup(addPlacePopupElement, addPlace).init();

const placesContainer = document.querySelector('.places');

function createPlace(placeInfo) {
  const card = new Card(placeInfo, '#place', () => openViewPlacePopup(placeInfo))
  return card.generateCard();
}

function addPlace(placeInfo) {
  const newPlace = createPlace(placeInfo);
  placesContainer.prepend(newPlace);
  addPlacePopup.close();
}

addPlaceBtn.addEventListener('click', () => addPlacePopup.open());

/* View Place */
const viewPlacePopupElement = document.querySelector('#view-place-popup');
const viewPlacePopup = new ViewPlacePopup(viewPlacePopupElement).init();

function openViewPlacePopup(placeInfo) {
  viewPlacePopup.setInfo(placeInfo);
  viewPlacePopup.open();
}


defaultPlaces.forEach(addPlace);


