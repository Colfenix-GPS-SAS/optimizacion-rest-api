const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM modulos', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.get('/:id', (req,res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM modulos WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const { id, modulo, icon, footer } = req.body;
    mysqlConnection.query('INSERT INTO modulos (modulo, icon, footer) VALUES (?, ?, ?)', [modulo, icon, footer], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Status: 200, Save Response: Module saved'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;