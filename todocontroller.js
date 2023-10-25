const todomodels = require('../models/todomodels')

module.exports.getodo=async(req,res)=>{
    const todo=await todomodels.find()
    res.send(todo)
}

module.exports.savetodo= async (req,res)=>{
    const{ text }=req.body
    todomodels
    .create({text})
    .then((data)=>{
        console.log("Added successfully");
        console.log(data);
        res.send(data)
    })
}

module.exports.updatetodo = async (req,res) => {
    const {_id,text}=req.body
    todomodels
    .findByIdAndUpdate(_id,{text})
    .then(() => res.send("Updated successfully"))
    .catch((err) => console.log(err))
}

module.exports.deletetodo = async (req,res) => {
    const {_id}=req.body
    todomodels
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => console.log(err))
}
