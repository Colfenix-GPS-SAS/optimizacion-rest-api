const mysql = require('mysql');
const { promisify } = require('util')
const { database } = require('./keys')


const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('la conexion con la base de datos fue cerrada.')
        }
        if (err.code === 'ER_COUNT_ERROR') {
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('SE RECHAZÓ LA CONEXIÓN DE LA BASE DE DATOS')
        }
    }

    if(connection) {
        connection.release()
        console.log('DB is connected')
    }
    return;
})

pool.query = promisify(pool.query)


module.exports = pool;