const mongoose = require('mongoose');

const bioSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A biography should have a name'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'A biography should have an email'],
    unique: true,
  },
  country: String,
});

const Bio = mongoose.model('bio', bioSchema);

module.exports = Bio;
