const User = require("../model/User")
const cryptoJS = require("crypto-js");
const { validationResult } = require("express - validator")
const register1 = async (req, res, next) => {
    try{
        const error = validationResult(req.body)
        if(!error.isEmpty())
        return next(error);

        const isAlreadyExist = await User.findOne({email: req.body.email})
        if(isAlreadyExist){
            return next(error)
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(password, "something secret").toString(),
        })

        res.staus(200).json(user)
    } catch (error) {
      next(error)
    }
}

const login = async(req, res, next) => {
    try{
        const user = await User.findOne ({email: req.body.email})
        if(!usetr){
            return res.status(404).json("user not found")
        }
        const bytes = cryptoJS.AES.decrypt(user.password, "something secret")
        const originalPassword = bytes.toString(cryptoJS.enc.utf8)
        if(!originalPassword === user.password){
           return res.status(403).json("invalid password")
        }
        res.status(200).json("password successfully found")
    }catch (error) {
     next(error)
    }
}