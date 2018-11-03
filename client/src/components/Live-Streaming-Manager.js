let _socket = {};

function setSocket(socketRef) {
    _socket = socketRef;
}

function getSocket() {
    return _socket;
}

export default {
    setSocket,
    getSocket
  }