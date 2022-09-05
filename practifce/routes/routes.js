const express=require('express')
const {try1,createTask}=require('../controllers/controllers')
const router=express.Router()


router.route('/').get(try1).post(createTask)
module.exports= router

