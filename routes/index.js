var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
// var cors = require('cors')
// var bodyParser = require('body-parser')

// router.use(cors())
// router.use(bodyParser.urlencoded({extended: false}))
// router.use(bodyParser.json())

//Routes for runner table
router.get('/', function (req, res) {
  knex('runner')
    .then((runner) => {
      res.json(runner)
    })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('runner')
    .where('id', id)
    .then((runner) => {
      res.json(runner)
    })
})

router.post('/', (req, res) => {
  let post = req.body
  knex('runner')
  .insert(post)
  .returning('*')
  .then((runner) => {
    res.json(runner)
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id
  let edit = req.body
  knex('runner').where('id', id)
  .update(edit)
  .returning('*')
  .then(edited => {
    res.json(edited)
  })
})

router.delete('/:id', (req, res) => {
  let id = req.params.id
  knex('runner')
    .where('id', id).del().returning("*")
    .then(deleted => {
      res.json({deleted})
  })

})

//Routes for event table
router.get('/', function (req, res) {
  knex('event')
    .then((event) => {
      res.json(event)
    })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('event')
    .where('id', id)
    .then((event) => {
      res.json(event)
    })
})

router.post('/', (req, res) => {
  let post = req.body
  knex('event')
  .insert(post)
  .returning('*')
  .then((event) => {
    res.json(event)
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id
  let edit = req.body
  knex('event').where('id', id)
  .update(edit)
  .returning('*')
  .then(edited => {
    res.json(edited)
  })
})

router.delete('/:id', (req, res) => {
  let id = req.params.id
  knex('event')
    .where('id', id).del().returning("*")
    .then(deleted => {
      res.json({deleted})
  })
})


module.exports = router;
