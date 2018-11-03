import socketIo from 'socket.io';
import userRepository from '@repositories/user-repository';
import streamingSessionUserRepository from '../repositories/streaming-session-user-repository';
import streamingSessionRepository from '../repositories/streaming-session-repository';

const NotificationService = (server) => {
  let io = socketIo(server);

  const service = new UserStreamingService(userRepository, streamingSessionRepository, streamingSessionUserRepository, io);

  io.on("connection", socket => {

    socket.on("user_starts_streaming", userId => {
      console.log(`userId ${userId} starts streaming. socketId: ${socket.id}`);
      service.userStartsPublishing(userId, socket);
    });

    socket.on("user_ends_streaming", userId => {
      console.log(`userId ${userId} ends streaming. socketId: ${socket.id}`);
      service.userEndsPublishing(userId, socket);
    });

    socket.on("user_joins_streaming", (userId, sessionId) => {
      console.log(`userId ${userId} leaves streaming session ${sessionId}. socketId: ${socket.id}`);
      service.userJoinStreamingSession(userId, socket.id);
    });

    socket.on("user_leaves_streaming", (userId, sessionId) => {
      console.log(`userId ${userId} leaves streaming session ${sessionId}. socketId: ${socket.id}`);
      service.userLeavesStreamingSession(userId, sessionId);
    });
  })
}

export default NotificationService;