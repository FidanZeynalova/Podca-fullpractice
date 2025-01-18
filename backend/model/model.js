const mongoose = require("mongoose")

let PodcaSchema = new mongoose.Schema({
    name:{type:String,required:[true,"Enter Name"]},
    img:{type:String,required:[true,"Enter Image"]},
    desc:{type:String,required:[true,"Enter Description"]}
})

let PodcaModel = mongoose.model("podca",PodcaSchema)

module.exports = PodcaModel