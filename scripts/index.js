let profileNameElement = document.querySelector('.profile__name');
let profileCaptionElement = document.querySelector('.profile__caption');

let editProfileBtn = document.querySelector('.profile__edit-btn');
let editProfilePopup = document.querySelector('.edit-profile-popup');
let editProfilePopupCloseBtn = document.querySelector('.edit-profile-form__close-btn');
let editProfilePopupNameInput = document.querySelector('.edit-profile-form__item_type_name');
let editProfilePopupCaptionInput = document.querySelector('.edit-profile-form__item_type_caption');
let editProfileForm = document.querySelector('.edit-profile-form');

let likesBtns = document.querySelectorAll('.place__like-btn');

editProfileBtn.addEventListener('click', openEditProfilePopup);
editProfilePopupCloseBtn.addEventListener('click', closeEditProfilePopup);
editProfileForm.addEventListener('submit', saveProfileChangesAndClosePopup);

likesBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.classList.toggle('place__like-btn_active');
  });
});

function saveProfileChangesAndClosePopup(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfilePopupNameInput.value;
  profileCaptionElement.textContent = editProfilePopupCaptionInput.value;
  closeEditProfilePopup();
}

function openEditProfilePopup() {
  editProfilePopupNameInput.value = profileNameElement.textContent;
  editProfilePopupCaptionInput.value = profileCaptionElement.textContent;
  editProfilePopup.classList.add('edit-profile-popup_opened');
}

function closeEditProfilePopup() {
  editProfilePopup.classList.remove('edit-profile-popup_opened');
}
