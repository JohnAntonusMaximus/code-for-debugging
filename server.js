var express         = require('express');
var app             = express();
var path            = require('path');
var bodyParser      = require('body-parser');
var PORT            = process.env.PORT || 3000;
var mustache        = require('mustache-express');
var cookieParser    = require('cookie-parser');
var cookieSession   = require('cookie-session');
var session         = require('express-session');
var logger          = require('morgan');
var methodOverride  = require('method-override');
var http            = require('http');


/**************************************[Middleware]******************************************************/

// Default View Path //
app.set('views', path.join(__dirname,'/FrontEnd'));  

// Additional Middleware //

app.engine('html', mustache());
app.set('view engine', 'html');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.use(cookieParser());
app.use(cookieSession({keys: ['secretkey1', 'secretkey2']}));
app.use(logger('dev'));
app.use(methodOverride());


/************************************[Route Handlers]****************************************************/

var account         = require('./routes/account');

app.use('/account', account); 

/**************************************[Error Handlers]****************************************************/

// 404 Error Forwarder//
app.use(function(req, res, next) {
  var err = new Error('Not Found'); 
  err.status = 404; 
  next(err);
}); 

// 404 Error Development //
if (app.get('env') === 'development') { 
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { 
      message: err.message, 
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/**************************************[Server Start]****************************************************/

console.log("Listening on Port " + PORT + "...")
app.listen(PORT);
