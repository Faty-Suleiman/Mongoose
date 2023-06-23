const { validationResult } = require("express-validator")
const User = require("../model/Userdb")
const bcrypt = require ("bcrypt")
const register = async (req, res, next) => {
    try{
        const error = validationResult(req.body);
        if(!error.isEmpty()) {
            return res.status(400).json({
                error: error.array()
            })
        }

        const isAlreadyExist = await User.find({email: req.body.email});
        if(isAlreadyExist) {
            return res.status(400).json("User already exists");
        }
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt)

            const user = new User({...req.body, password: hash})
            const newUser = await user.save();
            res.status(200).json(newUser)

        }
     catch (error) {
      next(error)
    }
}
register()


const login = async (req,res) => {
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user) {
           return res.status(400).json("user not found")
        }
        const isCorrect = bcrypt.compareSync(user.password, req.body.password)
        if(!isCorrect) {
            return res.status(400).json("invalid credentials")
        }
        const {password, isAdmin, ...info} = user._doc

        return res.status(200).json("User login successfully", user)
    } catch (error) {
      next(error)
    }
}
login ()