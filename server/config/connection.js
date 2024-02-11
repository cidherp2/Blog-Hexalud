require('dotenv').config()
const  mysql  = require("mysql2/promise");


const db = mysql.createPool(
    {
        host: process.env.DB_HOST,
        database:process.env.DB_DATABASE,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        waitForConnections: true,
        connectionLimit:10,
        queueLimit:0,
        
    },
)

module.exports = db