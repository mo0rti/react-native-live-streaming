import { guid } from "@lib/helpers/security-helper";

class StreamingSessionUser {
  constructor(userId, sessionId) {
    this.id = guid();
    this.userId = userId;
    this.sessionId = sessionId;
  }
}

export default StreamingSessionUser;