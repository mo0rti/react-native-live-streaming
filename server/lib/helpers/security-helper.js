import md5 from 'md5';
import  CONSTANTS from '@lib/constants';

const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const createSign = (userId, expireDate) => {
  //let plain = `/live/${userId}-${expireDate}-${CONSTANTS.MEDIA_SERVER_PRIVATE_KEY}`;
  let plain = `/live/stream-${expireDate}-${CONSTANTS.MEDIA_SERVER_PRIVATE_KEY}`;
  console.log(plain);
  return md5(plain);
}

module.exports = {
  guid,
  createSign
}