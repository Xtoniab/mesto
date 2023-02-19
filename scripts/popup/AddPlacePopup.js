import { AddPlaceForm } from "../form/AddPlaceForm.js";
import { Popup } from "./Popup.js";

export class AddPlacePopup extends Popup {
  constructor(popupElement, onAddPlace) {
    super(popupElement);
    this._onAddPlace = onAddPlace;

    const formElement = this._popupElement.querySelector('#add-place-form');
    this._form = new AddPlaceForm(formElement, this._onSubmit.bind(this));
  }

  init() {
    super.init();
    this._form.init();
    return this;
  }

  _onSubmit(evt, data) {
    evt.preventDefault();
    this._onAddPlace(data);
  }

  open() {
    this._form.reset();
    super.open();
  }
}
