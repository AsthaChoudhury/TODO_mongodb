const mongoose=require('mongoose')

const todoschema=new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('TODO',todoschema);