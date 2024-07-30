const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const router = express.Router();
app.use("/api", router);
app.use(express.static(path.join(__dirname, '/dist')));
app.use(cors());

const PORT = process.env.PORT || 8080;
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_DATABASE || 'test'
})

connection.connect((err) => {
    if (err) console.log(err);
    else console.log('database connected');
})

router.get('/products', async (req, res) => {
    try {
        const [products] = await connection.promise().execute(`SELECT * from products`);
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/', 'index.html'));
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));