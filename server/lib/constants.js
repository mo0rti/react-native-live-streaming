const STREAMING = {
  STATE: {
    VIEWING: 'viewing',
    PUBLISHING: 'publishing'
  },

  COMMANDS: {
    SERVER: {
      STREAMING_STARTED: 'streaming_started',
      STREAMING_ENDED: 'SERVER_MESSAGE_streaming_ended',
      JOIN_TO_STREAMING: 'SERVER_MESSAGE_join_to_streaming',
      LEAVE_THE_STREAMING: 'SERVER_MESSAGE_leave_the_streaming'
    },
    CLIENT: {
      STREAMING_STARTED: 'CLIENT_MESSAGE_streaming_started',
      STREAMING_ENDED: 'CLIENT_MESSAGE_streaming_ended',
      JOIN_TO_STREAMING: 'CLIENT_MESSAGE_join_to_streaming',
      LEAVE_THE_STREAMING: 'CLIENT_MESSAGE_leave_the_streaming'
    }
  }
}

export default {
  STREAMING
}