const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    carName:{
        type:String,
        required:true
    },
    carYear:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("carCollection", carSchema)