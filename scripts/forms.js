const wrappedForms = {};
const formWrappers = {};

function wrapForm(formElement) {
  const submitBtnElement = formElement.querySelector('.popup__submit-btn');
  const inputElements = Array.from(formElement.querySelectorAll('.popup__form-item'));

  const wrappedForm = {
    formElement: formElement,
    submitBtnElement: submitBtnElement,
    inputs: inputElements.map(inputElement => ({
      inputElement: inputElement,
      errorElement: formElement.querySelector(`.${inputElement.id}-error`)
    }))
  };

  return wrappedForm;
}

function wrapEditProfileForm(formElement) {
  const wrappedForm = wrapForm(formElement);
  wrappedForm.nameInputElement = formElement.querySelector('#info-input-name');
  wrappedForm.captionInputElement = formElement.querySelector('#info-input-caption');

  return wrappedForm;
}

function wrapAddPlaceForm(formElement) {
  const wrappedForm = wrapForm(formElement);
  wrappedForm.nameInputElement = formElement.querySelector('#place-input-name');
  wrappedForm.linkInputElement = formElement.querySelector('#place-input-link');

  return wrappedForm;
}

function initFormWrappers() {
  formWrappers[editProfileFormId] = wrapEditProfileForm;
  formWrappers[addPlaceFormId] = wrapAddPlaceForm;
}

function initForms() {
  const formElements = Array.from(document.querySelectorAll('.popup__form'));
  formElements.forEach(formElement => {
    const wrapper = formWrappers[formElement.id];
    wrappedForms[formElement.id] = wrapper(formElement);
  });
}

initFormWrappers();
initForms();
