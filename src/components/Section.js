export class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderer(data) {
    this._renderer(data);
  }

  //отрисовываем все карточки
  renderItems() {
    this._renderedItems.forEach(item => {
    this._renderer(item);
    });
  }

  //добавляем карточку в контейнер
  addItem(element) {
    this._container.prepend(element)
  }
}
