
const connectDB = require("./config/db")
const User = require("./model/userdb")
const Property = require("./model/propertydb")
connectDB ();

const newUser = async () => {
    try{
   const user =  new User({
        name: "Ola",
        username: "olasco",
        age: "21",
        location: {
            state: "Lagos",
            city: "somolu",
            street: "shiro"
        },
        hobbies: ["swimming", "painting", "coding"]
    })
    const saveUser = await user.save()
    console.log("user created successfully", saveUser)
} catch (error) {
    console.log("failed to create",error)
}
}

newUser()