import { Form } from "./Form.js";


export class AddPlaceForm extends Form {
  constructor(formElement, onSubmit) {
    super(formElement, onSubmit)
    this._nameInputElement = formElement.querySelector('#place-input-name');
    this._linkInputElement = formElement.querySelector('#place-input-link');
  }

  getData() {
    return Object.assign(super.getData(), {
      name: this.getName(),
      link: this.getLink()
    });
  }

  getName() { return this._nameInputElement.value }
  getLink() { return this._linkInputElement.value }
}
