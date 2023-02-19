const mongoose = require('mongoose');

const MovieScema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Movie', MovieScema);
