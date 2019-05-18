const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h2>WEP API SPRINT</h2>`)
});

module.exports = server;
