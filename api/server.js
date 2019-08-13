const express = require('express');
const helmet = require('helmet');

const dealerRouter = require('../dealer/dealer-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dealer', dealerRouter);

module.exports = server;