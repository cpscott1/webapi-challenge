const express = require('express');
const helmet = require('helmet');
const server = express();
const actionRouter = require('./actions/action-router');
const projectRouter = require('./projects/project-router');


server.use(helmet())
server.use(express.json())

server.use('/api/actions', actionRouter)
server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
  res.send(`<h2>WEP API SPRINT</h2>`)
});

module.exports = server;
