var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM my_shelf`)
    .then(data => {
      res.json(data.rows)
    })
});

/* Push New Album */
router.post('/', function(req, res, next){
  knex("my_shelf").insert(req.body)
    .then(function(data){
      res.json("success");
    })
})

/* GET Single Album */
router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM my_shelf where id = ${req.params.id}`)
    .then(data => {
      res.json(data.rows[0])
    })
})

/* Delete Single Album */
router.delete('/:id', function (req,res){
  knex.raw(`DELETE from my_shelf where id = ${req.params.id}`)
    .then(function(data){
      knex.raw(`SELECT * FROM my_shelf`)
        .then(data => {
          res.json(data.rows)
        })
    })
})

/* Edit Album */
router.patch('/:id/edit', function (req,res){
  knex.raw(`UPDATE my_shelf where id = ${req.params.id}`)
    .then(function(data){
      res.json(data.rows)
    })
})






module.exports = router;
