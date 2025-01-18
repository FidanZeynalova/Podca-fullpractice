const express = require("express")
const app = express()
app.use(express.json())
const PodcaModel = require("../model/model")


const PodcaController = {
getData:async (req,res) =>{
    let data = await PodcaModel.find()
    res.send(data)
},
getDataById:async (req,res) =>{
    let {id} = req.params
    let data = await PodcaModel.findById(id)
    res.send(data)
},
post:async (req,res) =>{
    let post =  PodcaModel(req.body)
   await post.save()
   res.send({
    message:"Succes Post",
    data:req.body
   })
},
deleteData:async (req,res)=>{
    let {id} = req.params
    let delData = await PodcaModel.findByIdAndDelete(id)
    res.send(delData)
},
editData:async (req,res)=>{
    let {id} = req.params
    let edit = req.body
    let edited = await PodcaModel.findByIdAndUpdate(id,edit,{new:true})
    res.send(edited)
}
}
module.exports = PodcaController