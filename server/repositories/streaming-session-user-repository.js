import BaseRepository from "@lib/repositories/base-repository";
import DbException from "@lib/exceptions/db-exception";

class StreamingSessionUserRepository extends BaseRepository {
  constructor() {
    super();
  }

  findByUserIdAndSessionId(userId, sessionId) {
    let filtered = this.query(t => t.userId == userId && t.sessionId == sessionId);
    if (filtered.length >= 1)
      throw new DbException("More than one session with the same user id exists in the streaming line");

    if (filtered.length != 0)
      return filtered[0];

    return null;
  }

  removeUserFromSession(userId, sessionId) {
    let filtered = this.query(t => t.userId == userId && t.sessionId == sessionId);
    if (filtered.length == 1)
      this.remove(filtered[0].id);
  }
}

export default StreamingSessionUserRepository;
