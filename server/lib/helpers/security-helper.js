const md5 = require('md5');

const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const createToken = ({userId}) => {
  let now = new Date();
  return md5(`${userId}-${now}`);
}

export default {
  guid,
  createToken
}