var express = require('express');
var router = express.Router();
var apiController = require('../controllers/api')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/songs', function (request, response, next) {
  apiController.getSongs(request.query, function (error, apiResponseObject, body) {
    if (error) { response.status(500).json({ error: error.message }) }

    response.json(JSON.parse(body))
  })
})

module.exports = router;
