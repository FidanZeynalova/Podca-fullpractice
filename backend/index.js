const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const  route  = require("./routes/routes")

app.use(express.json())
app.use(cors())
dotenv.config()
require("./config/config")
app.use("/podca",route)

app.listen(process.env.port,()=>{
    console.log("Suuces Listen 6060 Port");
    
})
