const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({hi: 'fullstack changed now'});
});

app.get('/greet', (req,res) => {
    res.send({hi: 'greeting!'});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);