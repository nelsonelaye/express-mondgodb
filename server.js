const express = require("express")
const port = 2022
const app = express()
const mongoose = require("mongoose")
const myRoute = require("./router") 

//url which connect database with the mongodb
const url = "mongodb://localhost/CarDB"

//mongoose function to connect url
mongoose.connect(url).then(()=> {
    console.log("Connected to database...")
}).catch((err)=> {
    console.log(err.message)
})

app.use(express.json())
app.use("/api", myRoute)

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})