var express = require('express');
var router = express.Router();

const StreamingRouter = (userStreamingService) => {

  router.get('/getStreamingUser', function (req, res) {
    const r = userStreamingService.getStreamingUser();
    return res.json(r);
  });

  router.get('/getViewingUser', function (req, res) {
    const r = userStreamingService.getViewingUser(req.params.sessionId);
    return res.json(r);
  });

  return router;
}

module.exports = StreamingRouter;
