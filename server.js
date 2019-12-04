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

// Using handlebars to render the list of groceries
app.get('/', (req, res) => {
    connection.query('SELECT * FROM groceries;', (err, data) => {
        if (err) {
            return res.statusCode(500).end();
        }
        res.render('index', { groceries: data })
    })
})

app.get('/:store', (req, res) => {
    let store = req.params.store;

    connection.query('SELECT * FROM groceries WHERE store = ?', [store], (err, data) => {
        if (err) {
            return res.statusCode(500).end();
        }
        res.render('index', { groceries: data })
    })

})

app.post('/api/add', (req, res) => {
    connection.query('INSERT INTO groceries (item, store) VALUES (?, ?);', [req.body.item, req.body.store], (err, result) => {
        if (err) {
            return res.status(500).end();
        }
        // console.log(res)
    })
})


// Start the server listening on PORT
app.listen(PORT, function () {
    console.log('Server is listening on: http://localhost:' + PORT);
});

