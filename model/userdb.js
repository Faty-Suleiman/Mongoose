const mongoose = require("mongoose");
//const locationSchema = mongoose.Schema ({
   //city: String,
//     state: String,
//     street: String,
// })
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    age: Number,
    isAdmin: Boolean,
    location:{
    city: String,
    state: String,
    street: String,
    },
    hobbies: [String]
});

const User = mongoose.model("User", userSchema)
module.exports = User;






