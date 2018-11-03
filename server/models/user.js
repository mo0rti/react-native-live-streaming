import { createSign, guid } from "@lib/helpers/security-helper";

class User {
  constructor(userName) {
    let id = guid();
    this.id = id;
    this.userName = userName;

    const expireDate = new Date().setDate(1);
    this.expireDate = expireDate;
    this.token = createSign(id, expireDate);
  }
}

export default User;