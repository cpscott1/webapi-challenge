const express = require('express');

const router = express.Router();

const projectDb = require('../data/helpers/projectModel.js');

router.use(express.json())

router.get('/', (req, res) => {
  projectDb.get()
  .then(allProjects => {
    res.status(200).json(allProjects)
  })
  .catch(err => {
    res.status(500).send(err);
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  projectDb.getProjectActions(id)
  .then(userId => {
    res.status(200).json(userId);
  })
  .catch(err => {
    res.status(500).send(err);
  })
})

router.post('/', (req, res) => {
  const newProject = req.body;

  projectDb.insert(newProject)
  .then(addProject => {
    res.status(201).json(addProject)
  })
  .catch(err => {
    res.status(500).send(err);
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  projectDb.update(id, changes)
  .then(updatedProject => {
    if (updatedProject) {
      res.json(updatedProject)
    } else {
      res.status(404).json({ err: 'wrong id try again' })
    }
  })
  .catch(err => {
    res.status(404).send(err)
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  projectDb.remove(id)
  .then(removedProject => {
    res.json(removedProject)
  })
  .catch(err => {
    res.status(400).send(err);
  })
})

module.exports = router;
