const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({hi: 'there from heroku and github'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);