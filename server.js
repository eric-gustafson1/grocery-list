const express = require('express');
const exhbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'grocery_db'
});

connection.connect(function (err) {
    if (err) {
        console.err('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id: ' + connection.threadId);
});


// Start the server listening on PORT
app.listen(PORT, function () {
    console.log('Server is listening on: http://localhost:' + PORT);
}):

