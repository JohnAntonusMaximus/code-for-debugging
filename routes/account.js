var express = require('express');
var router  = express.Router();

/***********************************[Routes]**********************************************/

router.get('/', function(req, res) {
     res.render('index');
});

router.get('/index*', function(req, res) {
     res.render('index');
});

/***********************************[End Routes]*******************************************/

module.exports = router;