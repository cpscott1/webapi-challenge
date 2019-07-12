const express = require('express');

const router = express.Router();

const actionDb = require('../data/helpers/actionModel.js');

router.use(express.json())

router.get('/', (req, res) => {
  actionDb.get()
  .then(actions => {
    res.status(200).json(actions)
  })
  .catch(err => {
    res.status(500).send(err);
  })
})

router.post('/', (req, res) => {
  const newAction = req.body;

  actionDb.insert(newAction)
  .then(addAction => {
    res.status(201).json(addAction)
  })
  .catch(err => {
    res.status(500).send(err);
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  actionDb.update(id, changes)
  .then(updatedAction => {
    if (updatedAction) {
      res.json(updatedAction)
    } else {
      res.status(404).json({ err: ' could not update try again' })
    }
  })
  .catch(err => {
    res.status(404).send(err)
  })

})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  actionDb.remove(id)
  .then(removedAction => {
    res.json(removedAction)
  })
  .catch(err => {
    res.status(400).send(err);
  })
})

module.exports = router;
