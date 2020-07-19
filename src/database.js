const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '31.220.62.253',
    user: 'onlinecolfenix_davidnh',
    password: 'r97x]3o!AKRD',
    database: 'onlinecolfenix_kodaadvance'
})

mysqlConnection.connect(function (err) {
    if(err) {
        console.log('err');
        return;
    } else {
        console.log('Database is connected');
    }
});

module.exports = mysqlConnection;