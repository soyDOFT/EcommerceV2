import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;
const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_DATABASE || 'test'
})

app.get('/api/products', async (req, res) => {
    const [products] = await connection.promise().execute(`SELECT * from products`);
    res.json(products);
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));