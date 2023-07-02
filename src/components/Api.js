import { Section } from "../components/Section.js";
import { profileInfoTitle, profileInfoSubtitle, profileAvatar } from "../utils/utils.js"

export class Api {
  constructor({baseURL, headers}) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  getUserInfo() {  //получаем информацию о пользователе с сервера
    return fetch(`${this._baseURL}/users/me`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
        return res.json();
      }
    })
      /*.then((res) => {
        console.log(res);
        console.log(res.name, res.about, res.avatar, res._id);
        profileInfoTitle.textContent = res.name;
        profileInfoSubtitle.textContent = res.about;
        profileAvatar.src = res.avatar;
      })
      .catch((err) => {
        console.log('Ошибка запроса', err);
      });*/
  }

  getInitialCards() {  //загружаем карточки с сервера
    return fetch(`${this._baseURL}/cards`, {
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    /*.then((res) => {
      console.log(res);
      console.log(res[0].name, res[0].link);
    })*/
  }

  handleEditProfile(data) {  //редактируем профиль(кроме аватара)
    return fetch(`${this._baseURL}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.firstname,
        about: data.job
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      console.log(res);
    })
  }

  handleEditAvatar(data) {  //редактируем аватар
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      console.log(res);
    })
  }

  handleAddCard(data) {  //добавляем карточку на сервер
    return fetch(`${this._baseURL}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      console.log(res);
    })
  }

  handleDeleteCard(cardId) {  //удаляем карточку с сервера
    return fetch(`${this._baseURL}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch ((error => console.log(`Ошибка: ${error}`)))
  }

  handleAddLikeCard(data) { //добавляем лайк карточке
    return fetch(`${this._baseURL}/cards/${data}/likes`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify({
        _id: data._id
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  handleDeleteLikeCard(data) { //удаляем лайк с карточки
    return fetch(`${this._baseURL}/cards/${data}/likes`, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify({
        _id: data._id
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
  }

}
