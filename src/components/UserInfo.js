export class UserInfo {
  constructor({profileNameSelector, profileJobSelector, profileAvatarSelector}) {
    this._profileNameElement = document.querySelector(profileNameSelector);
    this._profileJobElement = document.querySelector(profileJobSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
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

  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }

  setUserId(_id) {
    this._id = _id;
  }

  getUserId() {
    return this._id;
  }
}
