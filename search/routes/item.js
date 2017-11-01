var express = require('express');
var router = express.Router();
var mysql= require('mysql'); 
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '123456'
});
router.post('/list', function(req, res, next) {

    res.header('Access-Control-Allow-Origin','*');
    var a=req.body.val;
    console.log(a)
    connection.query(`SELECT * FROM baobei.shopping_table WHERE name LIKE '%${a}%'`, function(err, rows, fields) {
        res.send(rows);
        console.log(rows)
    })
});

module.exports = router;

