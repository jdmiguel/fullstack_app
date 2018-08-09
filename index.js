const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({hi: 'there from heroku and github connected right now'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);