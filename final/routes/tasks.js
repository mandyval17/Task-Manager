const express = require('express')
const router = express.Router()

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
  createPurpose,
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask).post(createPurpose)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
