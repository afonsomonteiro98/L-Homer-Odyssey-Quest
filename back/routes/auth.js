const express = require('express');
const router = express.Router();
const connection = require('../sql/config')

router.post('/signup', (req, res, next) => {
    connection.query('INSERT INTO users SET ?', req.body, (err, results, fields) => {
        if(err) {
            res.status(500).json({ flash: error.message});
        }
        res.status(200).json({ flash: "User has been signed up!"});
    })
})

module.exports = router