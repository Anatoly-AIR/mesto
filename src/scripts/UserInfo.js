import { nameInput, jobInput } from "../scripts/utils.js"

export class UserInfo {
  constructor({profileNameSelector, profileJobSelector}) {
  this._profileNameElement = document.querySelector(profileNameSelector);
  this._profileJobElement = document.querySelector(profileJobSelector);
  }

  getUserInfo() {
    return{
    firstname: this._profileNameElement.textContent,
    job: this._profileJobElement.textContent
    }
  }

  setUserInfo(data) {
    this._profileNameElement.textContent = data.firstname;
    this._profileJobElement.textContent = data.job;
  }
}
