import { FormValidator } from "./FormValidator.js";

export class Form {
  constructor(formElement, onSubmit) {

    this._onSubmit = onSubmit;
    this._formElement = formElement;
    this._inactiveButtonClass = 'popup__submit-btn_disabled';
    this._submitBtnElement = formElement.querySelector('.popup__submit-btn');

    const inputElements = Array.from(formElement.querySelectorAll('.popup__form-item'));
    this._inputs = inputElements.map(inputElement => ({
      inputElement: inputElement,
      errorElement: formElement.querySelector(`.${inputElement.id}-error`)
    }))

    this.validator = new FormValidator(this, this._inputs);
  }

  setSubmitBtnEnabled(enabled) {
    if (enabled) {
      this._submitBtnElement.classList.remove(this._inactiveButtonClass);
      this._submitBtnElement.removeAttribute('disabled');
    } else {
      this._submitBtnElement.classList.add(this._inactiveButtonClass);
      this._submitBtnElement.setAttribute('disabled', true);
    }
  }

  // Object with form fileds data
  getData() {
    return {};
  }

  init() {
    this._formElement.addEventListener('submit', evt => this._onSubmit(evt, this.getData()));
    this.validator.enableValidation();
  }

  reset() {
    this.validator.hideErrors();
    this._formElement.reset();
  }
}
