const mongoose = require("mongoose")
const connectDb = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
        console.log(" server connected")
    }
    catch (error) {
    console.log("failed to be connected", error)
}
}

module.exports = connectDb