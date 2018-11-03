require('module-alias/register');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

const UserRepository = require('@repositories/user-repository');
const StreamingSessionRepository = require('@repositories/streaming-session-repository');
const StreamingSessionUserRepository = require('@repositories/streaming-session-user-repository');
const UserService = require('@services/user-service');
const UserStreamingService = require('@services/user-streaming-service');

const notificationService = require('@services/notification-service');

let user_repo = new UserRepository();
let ss_repo = new StreamingSessionRepository();
let ssu_repo = new StreamingSessionUserRepository();

const userService = new UserService(user_repo);
const userStreamingService = new UserStreamingService(user_repo, ss_repo, ssu_repo);

var indexRouter = require('@routes/index');
var usersRouter = require('@routes/users')(userService);
var streamingRouter = require('@routes/streaming')(userStreamingService);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/streaming', streamingRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err.stack);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(4000);
notificationService(server, user_repo, ss_repo, ssu_repo);

module.exports = app;
