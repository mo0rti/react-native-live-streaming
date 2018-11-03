var express = require('express');
var router = express.Router();

const StreamingRouter = (userStreamingService) => {

  router.get('/getStreamingUsers', function (req, res) {
    const r = userStreamingService.getStreamingUsers();
    return res.json(r);
  });

  router.get('/getViewingUsers', function (req, res) {
    const r = userStreamingService.getViewingUsers(req.params.sessionId);
    return res.json(r);
  });

  return router;
}

module.exports = StreamingRouter;
