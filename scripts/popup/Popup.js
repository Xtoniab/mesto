export class Popup {
  constructor(popupElement, options) {
    this._popupElement = popupElement;
    this._containerClass = 'popup__container';
    this._openedModifierClass = 'popup_opened';
    this._closeBtnElement = popupElement.querySelector('.popup__close-btn');

    // TODO:: Maybe exists normal way to subscribe/unsubscribe events
    this.bindedClose = this._handleEcsPressed.bind(this);
  }

  init() {
    this._closeBtnElement.addEventListener('click', this.close.bind(this));
    this._popupElement.addEventListener('click', this._handleBackgroundClick.bind(this));
    return this;
  }

  open() {
    this._popupElement.classList.add(this._openedModifierClass);
    document.addEventListener('keydown', this.bindedClose);
  }

  close() {
    this._popupElement.classList.remove(this._openedModifierClass);
    document.removeEventListener('keydown', this.bindedClose);
  }

  _handleEcsPressed(evt) {
    if (evt.code === "Escape") {
      this.close();
    }
  }

  _handleBackgroundClick(evt) {
    if (evt.target.classList.contains(this._containerClass)) {
      this.close();
    }
  }
}
