const mysql = require('mysql2/promise');
require('dotenv').config()

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '07052005',
    database: 'rhac1'
})

module.exports = connection