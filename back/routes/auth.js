const express = require('express');
const router = express.Router();
const connection = require('../sql/config')

router.post('/signup', (req, res, next) => {
    connection.query('INSERT INTO users SET ?', req.body, (err, results, fields) => {
        if(err) {
            res.status(500).end()
        }
        res.end()
    })
})

module.exports = router