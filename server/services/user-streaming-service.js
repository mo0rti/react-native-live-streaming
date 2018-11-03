import StreamingSession from "@models/streaming-session";
import StreamingSessionUser from "@models/streaming-session-user";
import CONSTANTS from "@lib/constants";
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
    if (streamingSession.length != 0) {
      throw new ServiceException("User aleady publishing");
    }

    let user = this.userRepository.get(userId);

    streamingSession = new StreamingSession(userId, socket.id);
    this.streamingSessionRepository.add(streamingSession);

    let message = {
      userId: user.id,
      userName: user.userName,
      token: user.token,
      streamingId: streamingSession.id
    };
    socket.broadcast.emit(CONSTANTS.STREAMING.COMMANDS.SERVER.STREAMING_STARTED, message);
  }

  userEndsPublishing(userId, socket) {
    let streamingSession = this.streamingSessionRepository.findStreamingSessionByOwnerId(userId);
    if (!streamingSession) {
      throw new ServiceException("User is not in streaming list");
    }

    this.streamingSessionRepository.remove(streamingSession.id);

    socket.broadcast.emit(
      CONSTANTS.STREAMING.COMMANDS.SERVER.STREAMING_ENDED,
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
      this.io.to(sessionId).emit(CONSTANTS.STREAMING.COMMANDS.SERVER.JOIN_TO_STREAMING, { userId, username: user.username });
    }
  }

  userLeavesStreamingSession(userId, sessionId) {
    this.streamingSessionUserRepository.removeUserFromSession(userId, sessionId);
    this.io.to(sessionId).emit(CONSTANTS.STREAMING.COMMANDS.SERVER.LEAVE_THE_STREAMING, { userId });
  }

  getStreamingUsers() {
    return this.streamingSessionRepository.getStreamingUsers();
  }

  getViewingUsers(sessionId) {
    return this.streamingSessionUserRepository.query(t => t.sessionId == sessionId);
  }
}

module.exports = UserStreamingService;
