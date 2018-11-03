const socketIo = require('socket.io');

const UserStreamingService = require('@services/user-streaming-service');

const NotificationService = (server, user_repo, ss_repo, ssu_repo) => {
  let io = socketIo(server);
  const service = new UserStreamingService(user_repo, ss_repo, ssu_repo, io);

  io.on("connection", socket => {
    console.log("connection");
    socket.on("user_starts_streaming", user => {
      console.log(`userId ${user.userId} starts streaming. socketId: ${socket.id}`);
      service.userStartsPublishing(user.userId, socket);
    });

    socket.on("user_ends_streaming", user => {
      console.log(`userId ${user.userId} ends streaming. socketId: ${socket.id}`);
      service.userEndsPublishing(user.userId, socket);
    });

    socket.on("user_joins_streaming", ({ userId, sessionId }) => {
      console.log(`userId ${userId} joins streaming session ${sessionId}. socketId: ${socket.id}`);
      service.userJoinStreamingSession(userId, socket.id);
    });

    socket.on("user_leaves_streaming", ({ userId, sessionId }) => {
      console.log(`userId ${userId} leaves streaming session ${sessionId}. socketId: ${socket.id}`);
      service.userLeavesStreamingSession(userId, sessionId);
    });
  })
}

module.exports = NotificationService;