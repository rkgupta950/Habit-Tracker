const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false }, // Added description field
  progress: { type: Array, default: [] },

});

module.exports = mongoose.model('Habit', habitSchema);
