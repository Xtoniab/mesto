import { Form } from "./Form.js";

export class EditProfileForm extends Form {
  constructor(formElement, onSubmit) {
    super(formElement, onSubmit)
    this._formElement = formElement;
    this._nameInputElement = formElement.querySelector('#info-input-name');
    this._captionInputElement = formElement.querySelector('#info-input-caption');
  }

  getData() {
    return Object.assign(super.getData(), {
      name: this.getName(),
      caption: this.getCaption()
    });
  }

  getName() { return this._nameInputElement.value }
  getCaption() { return this._captionInputElement.value }
}
