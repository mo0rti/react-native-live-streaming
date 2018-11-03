import BaseRepository from "@repositories/base-repository";
import DbException from "@lib/exceptions/db-exception";

class StreamingSessionRepository extends BaseRepository {
  constructor(userRepository) {
    super();
    this.userRepository = userRepository;
  }

  findStreamingSessionByOwnerId(ownerId) {
    let filtered = super.query(t => t.ownerId == ownerId);
    if (filtered.length > 1)
      throw new DbException("More than one user with the same user id exists in the streaming line");

    if (filtered.length != 0)
      return filtered[0];

    return null;
  }

  getStreamingUsers() {
    let streamingSessions = super.get();
    return streamingSessions.map(t => {
      let user = userRepository.get(t.ownerId);
      return {
        ...t,
        userName: user.userName,
        token: user.token
      }
    });
  }
}

module.exports = StreamingSessionRepository;
