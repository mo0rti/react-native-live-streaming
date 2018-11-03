import StreamingSession from "@models/streaming-session";
import StreamingSessionUser from "@models/streaming-session-user";
import { STREAMING } from "@lib/constants";
import ServiceException from "@lib/exceptions/service-exception";

class UserStreamingService {
  constructor(userRepository, streamingSessionRepository, streamingSessionUserRepository, io) {
    this.userRepository = userRepository;
    this.streamingSessionRepository = streamingSessionRepository;
    this.streamingSessionUserRepository = streamingSessionUserRepository;
    this.io = io;
  }

  userStartsPublishing(userId, socket) {
    let streamingSession = this.streamingSessionRepository.query(t => t.ownerId == userId);
    if (streamingSession) {
      throw new ServiceException("User aleady publishing");
    }

    let user = this.userRepository.get(userId);

    streamingSession = new StreamingSession(userId, socket.id);
    this.streamingSessionRepository.add(streamingSession);

    socket.broadcast.emit(
      STREAMING.COMMANDS.STREAMING_STARTED,
      {
        userId: user.id,
        userName: user.userName,
        token: user.token
      });
  }

  userEndsPublishing(userId, socket) {
    let streamingSession = this.streamingSessionRepository.findStreamingSessionByOwnerId(userId);
    if (!streamingSession) {
      throw new ServiceException("User is not in streaming list");
    }

    this.streamingSessionRepository.remove(streamingSession.id);

    socket.broadcast.emit(
      STREAMING.COMMANDS.STREAMING_ENDED,
      {
        userId: userId
      });
  }

  userJoinStreamingSession(userId, sessionId) {
    let user = this.userRepository.get(userId);
    let ssu = this.streamingSessionUserRepository.findByUserIdAndSessionId(userId, sessionId);
    if (!ssu) {
      let streamingSessionUser = new StreamingSessionUser(userId, sessionId);
      this.streamingSessionUserRepository.add(streamingSessionUser);
      this.io.to(sessionId).emit(STREAMING.COMMANDS.JOIN_TO_STREAMING, { userId, username: user.username });
    }
  }

  userLeavesStreamingSession(userId, sessionId) {
    this.streamingSessionUserRepository.removeUserFromSession(userId, sessionId);
    this.io.to(sessionId).emit(STREAMING.COMMANDS.LEAVE_THE_STREAMING, { userId });
  }

  getStreamingUser() {
    return this.streamingSessionRepository.get();
  }

  getViewingUser(sessionId) {
    return this.streamingSessionUserRepository.query(t => t.sessionId == sessionId);
  }
}

export default UserStreamingService;
