const settings = {
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__form-item_incorrect',
  errorClass: 'popup__input-error_visible'
}

function showInputError(input, errorMessage, inputErrorClass, errorClass) {
  input.inputElement.classList.add(inputErrorClass);
  input.errorElement.textContent = errorMessage;
  input.errorElement.classList.add(errorClass);
};

function hideInputError(input, inputErrorClass, errorClass) {
  input.inputElement.classList.remove(inputErrorClass);
  input.errorElement.classList.remove(errorClass);
  input.errorElement.textContent = '';
};

function hasInvalidInput(inputs) {
  return inputs.some(input => !input.inputElement.validity.valid);
}

function toggleButtonState(inputs, submitBtnElement, inactiveButtonClass) {
  if (hasInvalidInput(inputs)) {
    submitBtnElement.classList.add(inactiveButtonClass);
    submitBtnElement.setAttribute('disabled', true);
  } else {
    submitBtnElement.classList.remove(inactiveButtonClass);
    submitBtnElement.removeAttribute('disabled');
  }
}

function enableValidationForForm(form, settings) {
  const inputs = form.inputs;
  const submitBtnElement = form.submitBtnElement;

  form.toggleButtonState = () => {
    toggleButtonState(inputs, submitBtnElement, settings.inactiveButtonClass);
  };

  form.hideErrors = () => {
    toggleButtonState(inputs, submitBtnElement, settings.inactiveButtonClass);
    inputs.forEach(input => hideInputError(input, settings.inputErrorClass, settings.errorClass));
  };

  inputs.forEach(input => {
    input.inputElement.addEventListener('input', function () {
      checkInputValidity(input, settings.inputErrorClass, settings.errorClass);
      form.toggleButtonState();
    });
  });
}

function enableValidation(settings) {
  Object.values(wrappedForms)
    .forEach(form => enableValidationForForm(form, settings));
}

function checkInputValidity(input, inputErrorClass, errorClass) {
  if (!input.inputElement.validity.valid) {
    showInputError(input, input.inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(input, inputErrorClass, errorClass);
  }
};

enableValidation(settings);
