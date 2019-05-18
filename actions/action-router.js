const express = require('express');

const router = express.Router();

const actionDb = require('../data/helpers/actionModel.js');

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
