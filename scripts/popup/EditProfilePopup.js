import { EditProfileForm } from "../form/EditProfileForm.js";
import { Popup } from "./Popup.js";

export class EditProfilePopup extends Popup {
  constructor(popupElement, onProfileEdit) {
    super(popupElement);
    this._onProfileEdit = onProfileEdit;

    const formElement = this._popupElement.querySelector('#edit-profile-form');
    this._form = new EditProfileForm(formElement, this._onSubmit.bind(this));
  }

  init() {
    super.init();
    this._form.init();
    return this;
  }

  _onSubmit(evt, data) {
    evt.preventDefault();
    this._onProfileEdit(data);
  }

  open() {
    this._form.reset();
    super.open();
  }
}
