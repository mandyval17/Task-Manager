const mongoose = require('mongoose')

// const date = new Date();
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name(s)'],
    trim: true,
    maxlength: [1000, 'name can not be more than 20 characters'],
  },
  // date: {
  //   type: Date,
  //   required: [true, 'Must provide date']
  // },
  // purpose: {
  //   type: String,
  //   required: [true, 'must provide purpose'],
  //   trim: true,
  //   maxlength: [150, 'name can not be more than 20 characters'],
  // },
  // Date: {
  //   type: String,
  //   default:(new Date()).toLocaleDateString()
  // },
  // Time: {
  //   type: String,
  //   default:(new Date()).toLocaleTimeString()
  // },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
