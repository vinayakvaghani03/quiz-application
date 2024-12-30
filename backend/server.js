const express=require("express")
const dotenv = require("dotenv").config();
const cors= require("cors")

const app=express()
app.use(cors());
app.use(express.json())

const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server start successfuly on ${port}`)
})