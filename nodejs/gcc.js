const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session'),
  RedisStore = require('connect-redis')(session);

app.locals.pretty = true;
app.use('/user', express.static('uploads'));
app.set('views', './views_gcc');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.cookieParser());
app.use(express.session({
  store: new RedisStore(/*redis config: host, port 등*/),
  key: ‘sid’, // 세션키
  secret: ‘secret’, // 비밀키
  cookie: {
    maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
  }
}));

exports.logout = function (req, res) {
  req.session.destory();  // 세션 삭제
  res.clearCookie(‘sid’); // 세션 쿠키 삭제
};

app.listen(3000, function(){
  console.log('Connected, 3000 port!');
});
