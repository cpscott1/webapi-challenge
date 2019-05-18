const express = require('express');

const router = express.Router();

const projectDb = require('../data/helpers/projectModel.js');

router.use(express.json())

router.get('/', (req, res) => {

})

router.get('/:id', (req, res) => {

})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;
