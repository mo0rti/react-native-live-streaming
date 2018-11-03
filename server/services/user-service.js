import User from "@models/user";
import ServiceException from "@lib/exceptions/service-exception";

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  // to check whether user is exists or not, if not create one
  signIn(userName) {
    if (!userName)
      throw new ServiceException("User name should be defined");

    let user;
    let founded = this.userRepository.query(t => t.userName == userName);

    // user doesn't exists so create one
    if (founded.length == 0) {
      user = new User(userName);
      this.userRepository.add(user);
    } else {
      user = founded[0];
    }
    return {
      userId: user.userId,
      token: user.token
    };
  }
}

export default UserService;