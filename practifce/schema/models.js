const mongoose = require('mongoose')

// const date = new Date();
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name(s)'],
    trim: true,
    maxlength: [1000, 'name can not be more than 20 characters'],
  },
})

module.exports = mongoose.model('Task', TaskSchema)
