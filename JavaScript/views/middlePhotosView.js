class MiddlePhotosView {
  _parentElement = document.querySelector('body');
  _currPhoto;

  rander(data) {
    this._data = data;
    this._parentElement.insertAdjacentHTML('afterbegin', this.generateMarkup(this._data));
    this._currPhoto = document.querySelector('.viewed-img .main-image');
  }

  eventHandler() {

    document.getElementsByClassName('left-side-contant')[0];

    // middleSide.classList.remove('left-side-contant')
    // middleSide.classList.add('absolote-left-photos');
    // document.querySelector('body').insertAdjacentHTML('afterbegin', `${middleSide}`);

  }
}
export default new MiddlePhotosView();
