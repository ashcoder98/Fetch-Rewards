const express = require('express');
const app = express();

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

