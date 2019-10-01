const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://felipe:eskecii123@tindev-dwygj.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query = acessar query params ( para filtros )
// req.params = acessar route params ( para edição, delete )
// req.body = acessar corpo da requisição ( para criação, edição )

app.use(express.json());
app.use(routes);

app.listen(3333);