const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'food_app'
})

module.exports = connection

