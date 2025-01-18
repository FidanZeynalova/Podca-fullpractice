const express = require("express")
const PodcaController = require("../controller/controller")
const route = express.Router()

route.get("/",PodcaController.getData)
route.get("/:id",PodcaController.getDataById)
route.post("/",PodcaController.post)
route.put("/:id",PodcaController.editData)
route.delete("/:id",PodcaController.deleteData)

module.exports = route