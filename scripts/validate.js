const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__form-item_incorrect',
  errorClass: 'popup__input-error_visible'
}

enableValidation(settings);

function enableValidation(settings) {
  const forms = Array.from(document.querySelectorAll(settings.formSelector));
  forms.forEach(form => enableValidationForForm(form, settings));
}

function enableValidationForForm(form, settings) {
  const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
  const submitBtn = form.querySelector(settings.submitButtonSelector);

  form.toggleButtonState = () => {
    toggleButtonState(inputs, submitBtn, settings.inactiveButtonClass);
  };

  form.hideErrors = () => {
    toggleButtonState(inputs, submitBtn, settings.inactiveButtonClass);
    inputs.forEach(input => hideInputError(form, input, settings.inputErrorClass, settings.errorClass));
  };

  inputs.forEach(input => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input, settings.inputErrorClass, settings.errorClass);
      form.toggleButtonState();
    });
  });
}

function hasInvalidInput(inputList) {
  return inputList.some(input => !input.validity.valid);
}

function toggleButtonState(inputs, submitBtn, inactiveButtonClass) {
  if (hasInvalidInput(inputs)) {
    submitBtn.classList.add(inactiveButtonClass);
  } else {
    submitBtn.classList.remove(inactiveButtonClass);
  }
}

function checkInputValidity(form, input, inputErrorClass, errorClass) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(form, input, inputErrorClass, errorClass);
  }
};

function showInputError(form, input, errorMessage, inputErrorClass, errorClass) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.add(inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(errorClass);
};

function hideInputError(form, input, inputErrorClass, errorClass) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.remove(inputErrorClass);
  error.classList.remove(errorClass);
  error.textContent = '';
};
