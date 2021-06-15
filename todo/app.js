const express = require('express');
const app = express();

let list = ['Apples', 'Grapefruit', 'Ground Beef', 'Doritos'];

app.get('/', (req, res, next) => {
    res.send(list);
})

app.listen(3000, (req, res, next) => {
    console.log('Listening at port 3000');
})