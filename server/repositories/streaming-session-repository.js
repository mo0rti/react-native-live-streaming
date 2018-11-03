import BaseRepository from "@lib/repositories/base-repository";
import DbException from "@lib/exceptions/db-exception";

class StreamingSessionRepository extends BaseRepository {
  constructor() {
    super();
  }

  findStreamingSessionByOwnerId(ownerId) {
    let filtered = this.query(t => t.ownerId == ownerId);
    if (filtered.length >= 1)
      throw new DbException("More than one user with the same user id exists in the streaming line");

    if (filtered.length != 0)
      return filtered[0];

    return null;
  }
}

export default StreamingSessionRepository;
