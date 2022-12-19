let profileNameElement = document.querySelector('.profile__name');
let profileCaptionElement = document.querySelector('.profile__caption');
let profileEditBtn = document.querySelector('.profile__edit-btn');

let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let editProfileFormNameInput = document.querySelector('.edit-profile-form__item_type_name');
let editProfileFormCaptionInput = document.querySelector('.edit-profile-form__item_type_caption');
let editProfileForm = document.querySelector('.edit-profile-form');

let likesBtns = document.querySelectorAll('.place__like-btn');

profileEditBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
editProfileForm.addEventListener('submit', saveProfileChangesAndClosePopup);

likesBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('place__like-btn_active');
  });
});

function saveProfileChangesAndClosePopup(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileFormNameInput.value;
  profileCaptionElement.textContent = editProfileFormCaptionInput.value;
  closePopup();
}

function openPopup() {
  editProfileFormNameInput.value = profileNameElement.textContent;
  editProfileFormCaptionInput.value = profileCaptionElement.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}
