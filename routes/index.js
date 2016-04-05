var express = require('express');
var debug = require('debug')('expressjs-demo:router:routerIndex');

var router = express.Router();
debug('Start setting up index route');
/* GET home page. */
router.get('/', function(req, res, next){
	debug('root route');
  res.render('index', { settings:{ env: 'test'}, title: req.query.title || 'ExpressJS Demo' , author: req.query.author || 'Anthony' });

});
debug('Finish setting up index route');
module.exports = router;
