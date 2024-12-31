const express=require("express")
const dotenv = require("dotenv").config();
const cors= require("cors")
const route=require("./router/router.js")

const app=express()
app.use(cors());
app.use(express.json())
app.use("/api",route)

const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server start successfuly on ${port}`)
})