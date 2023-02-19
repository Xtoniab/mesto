import { Popup } from "./Popup.js";

export class ViewPlacePopup extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._imageElement = popupElement.querySelector('.popup__image');
    this._imageCaptionElement = popupElement.querySelector('.popup__image-caption');
  }

  setInfo(placeInfo) {
    this._imageCaptionElement.textContent = placeInfo.name;
    this._imageElement.src = placeInfo.link;
    this._imageElement.alt = placeInfo.name;
  }
}
