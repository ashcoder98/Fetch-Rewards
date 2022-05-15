const express = require('express');
require('dotenv').config();
const { PORT, DATABASE_URL } = process.env;
const app = express();

const mongoose = require('mongoose');
mongoose.connect(DATABASE_URL);

const db = mongoose.connection
db.on('open', ()=> console.log('You are connected to MongoDB'));
db.on('close', ()=> console.log('You are disconnected to MongoDB'));
db.on('error', (error) => console.log(error));



app.use(express.json());

let transactions = [
    {
    payer: "Dannon",
    points: 1000
    }
]
app.get('/', (req, res) => {
    res.send('Hello World')
});
app.get('/transactions', (req, res) => {
    res.send(transactions)
})
app.post('/transactions', (req, res) => {
    const transaction = {
        payer: req.body.payer,
        points: req.body.points,
        timestamp: req.body.timestamp
    };
    transactions.push(transaction);
    res.send(transactions)
})

app.listen(3000, () => 
    console.log('Express is listening on port 3000...')
)
console.log(transactions[0].payer)

