var express = require('express');
var router = express.Router();

var societyCtl = require('../controllers/society.server.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Test' });
  return societyCtl.getSociety(req,res);
});

/* sample
app.get('/todos/:id', function (req, res, next) {
  Todo.findById(req.params.id, function(err, todo){
    if(err) res.send(err);
    res.json(todo);
  });
});
*/
/* GET society page. */

router.get('/newsociety', function(req, res) {
  return societyCtl.getSociety(req,res);
});


/* POST society page. */
router.post('/newsociety', function(req, res) {
  return societyCtl.create(req,res);
});



module.exports = router;
