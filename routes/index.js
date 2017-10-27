var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var cors = require('cors')
var bodyParser = require('body-parser')

router.use(cors())
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('./', function (req, res) {
  knex('')
})

module.exports = router;
