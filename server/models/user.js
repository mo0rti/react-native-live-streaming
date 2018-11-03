import { createToken, guid } from "@lib/helpers/security-helper";

class User {
  constructor(userName) {
    let id = guid();
    this.id = id;
    this.userName = userName;
    this.token = createToken(id);
  }
}

export default User;