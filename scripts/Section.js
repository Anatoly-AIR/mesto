export class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //отрисовываем одну карточку
  renderer(item) {
    this._renderer(item);
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
