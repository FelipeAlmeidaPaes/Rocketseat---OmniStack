const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const httpServer = express();
const server = require('http').Server(httpServer);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Nova conexão', socket.id);
});

mongoose.connect('mongodb+srv://felipe:eskecii123@tindev-dwygj.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

httpServer.use(cors());
httpServer.use(express.json());
httpServer.use(routes);

server.listen(3333);