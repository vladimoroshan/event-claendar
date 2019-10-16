const express = require('express')
const Events = require('../models/Events')

const router = express.Router()

// Route to get all events by Username
router.get('/', (req, res, next) => {
  Events.find({ username: req.user.username }) 
    .then(events => {
      res.json(events)
    })
    .catch(err => next(err))
})

// Route to add an event 
router.post('/add', (req, res, next) => {
  let { id, title, start, end } = req.body;
  let username = req.user.username;

  Events.create({ id, username, title, start, end }) //.save()
    .then(event => {
      res.json({
        success: true,
        event,
      })
    })
    .catch(err => next(err))
})

// Route to update an event 
router.post('/update', (req, res, next) => {
  const newEvent = { id, title, start, end } = req.body;

  let username = req.user.username;
   Events.updateOne({ id, username }, newEvent)
    .then(() => {
      res.json({
        success: true,
        newEvent
      })
    })
    .catch(err => next(err))
})

router.post('/delete', (req, res, next) => { //findByIdAndRemove
  let id = req.body.id;
  let username = req.user.username;
  Events.deleteOne({ id: id, username: username })
    .then(() => {
      res.json({
        success: true,
        id: id,
      })
    })
    .catch(err => next(err))
})


module.exports = router
