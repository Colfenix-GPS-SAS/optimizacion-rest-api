const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/modules', (req, res) => {
    mysqlConnection.query('SELECT * FROM modulos', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.get('/modules/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM modulos WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/modules', (req, res) => {
    const { modulo, icon } = req.body;
    mysqlConnection.query('INSERT INTO modulos (modulo, icon) VALUES (?, ?)', [modulo, icon], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Status: 200, Save Response: Module saved'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;