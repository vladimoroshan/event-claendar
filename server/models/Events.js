const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  username: { type: String, required: true },
  id: { type: String, required: true }, // event id genereted on the client side
  title: { type: String },
  start: { type: String, required: true },
  end: { type: String, default: Date.now }

})

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;

