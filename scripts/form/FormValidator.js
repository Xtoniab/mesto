export class FormValidator {
  constructor(form, inputs) {
    this._form = form;
    this._inputs = inputs;

    this._inputErrorClass = 'popup__form-item_incorrect';
    this._errorClass = 'popup__input-error_visible';
  }

  _showInputError(input, errorMessage) {
    input.inputElement.classList.add(this._inputErrorClass);
    input.errorElement.textContent = errorMessage;
    input.errorElement.classList.add(this._errorClass);
  };

  _hideInputError(input) {
    input.inputElement.classList.remove(this._inputErrorClass);
    input.errorElement.classList.remove(this._errorClass);
    input.errorElement.textContent = '';
  };

  _hasInvalidInput() {
    return this._inputs.some(input => !input.inputElement.validity.valid);
  }

  _toggleButtonState(inputs) {
    this._form.setSubmitBtnEnabled(!this._hasInvalidInput(inputs));
  }

  _checkInputValidity(input) {
    if (!input.inputElement.validity.valid) {
      this._showInputError(input, input.inputElement.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  hideErrors() {
    this._toggleButtonState(this._inputs);
    this._inputs.forEach(this._hideInputError.bind(this));
  }

  enableValidation() {
    this._inputs.forEach(input => {
      input.inputElement.addEventListener('input', function () {
        this._checkInputValidity(input);
        this._toggleButtonState();
      }.bind(this));
    });
  }
}
