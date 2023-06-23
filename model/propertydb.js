const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true,
        maxLength: 2,
    },
    price: Number,
    
    rating: {
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
    postedBy: {type: mongoose.SchemaTypes.ObjectId, ref: "User"}
    }
})

const property = mongoose.model("property", propertySchema)
module.exports = property