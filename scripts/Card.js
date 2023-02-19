export class Card {

  constructor(data, templateSelector, onClick) {
    this.data = data;

    this._templateSelector = templateSelector;
    this._onClick = onClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  }

  _onLikePressed() {
    this._likeBtnElement.classList.toggle('place__like-btn_active');
  }

  _setEventListeners() {
    this._likeBtnElement.addEventListener('click', () => this._onLikePressed());
    this._removeBtnElement.addEventListener('click', () => this._remove());
    this._imgElement.addEventListener('click', () => this._onClick());
  }

  _remove() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeBtnElement = this._element.querySelector('.place__like-btn');
    this._removeBtnElement = this._element.querySelector('.place__remove-btn');
    this._imgElement = this._element.querySelector('.place__image');
    this._titleElement = this._element.querySelector('.place__title');

    this._setEventListeners();

    this._imgElement.src = this.data.link;
    this._titleElement.textContent = this.data.name;

    return this._element;
  }
}
