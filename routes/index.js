var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var host = req.headers.host
  var data = {}
  data["host"] = host
  res.render('index',data);
});

module.exports = router;

/* GET todolist page. */
router.get('/todolist', function(req, res, next) {
  res.render('todolist', { title: 'Express' });
});

module.exports = router;
