const express=require('express')
const app=express()
const Task=require('../schema/models')

const  try1 = (req,res)=>{
    res.send("Kam kar rha hai bsdk")
}
const  createTask = async (req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({ task })
}

module.exports={
    try1,
    createTask
}