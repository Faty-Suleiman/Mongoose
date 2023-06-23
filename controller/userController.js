

const getAll = async (req, res, next) => {
    try{
        if(req.user.isAdmin){
           const users = await User.find() 
           const { password, isAdmin, age, ...info } = users._doc
           res.status(200).json(info)
        }else {
            res.status(404).json("Not authorized")
        }
    } catch (error) {

    }
}

const getSingle = async (req, res)=> {
    try{
    const user = await User.findById({_id: req.params.id})
    res.status(200).send(user)
    }catch (error) {
     next(error)
    }
}

const updateUser = async(req, res, next) => {
    try {
    const user = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true})
    res.status(200).send("user updated successfully")
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    try{
        await User.findByInDelete(req.params.id)
            res.status(200).send("user deleted successfully")

        }catch (error) {
            next(error)
        }
    }
module.exports = {getAll, getSingle, updateUser, deleteUser}