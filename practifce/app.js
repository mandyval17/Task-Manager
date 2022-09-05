const express=require('express')
const app=express()
require('dotenv').config()
const task=require('./routes/routes')
const connectDB=require('./db/connect')
app.use(express.json())
app.use('/abot',task)

app.get('/abot',(req,res)=>{
    res.send()
})
app.get('/:id',(req,res)=>{
    res.send(req.params['id'])
    console.log(req.params['id'])
})

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();