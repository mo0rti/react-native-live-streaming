var express = require('express');
var router = express.Router();

const UsersRouter = (userService) => {

  router.get('/', function (req, res, next) {
    res.send('respond with a resource');
  });

  router.post('/signin', function (req, res, next) {
    let user = userService.signIn(req.body.userName);
    res.send(user);
  });

  return router;
}

module.exports = UsersRouter;
