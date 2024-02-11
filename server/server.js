const express = require("express")
const app = express();
const PORT = process.env.PORT || 3001
const db = require('./config/connection')
const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended:true}));

// db.query('CREATE DATABASE blog_hexalud_DB', (err) => {
//     if (err) {
//         console.error('Error creating the database:', err);
//         return;
//     }
// }
// )


db.getConnection((err,connection) => {
    if (err) {
        console.error('Error conectándose a la base de datos:', err);
        return;
    }
    else{
        console.log("correctly connected to the database")
        connection.release();
    }
});


app.listen(PORT, () => console.log(`Now listening on port: http://localhost:${PORT}`));
app.use(routes)
