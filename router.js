const express = require("express")
const route = express.Router()
const {createCar, getAllCars, updateCar, findOneCar, deleteCar} = require("./controller")

//route to create
route.post("/create", createCar)

//get/read all cars
route.get("/get", getAllCars)

//route to update
route.patch("/:id", updateCar)

//route to find one car by the id
route.get("/:id", findOneCar)

//route to delete
route.delete("/:id", deleteCar)
module.exports = route
