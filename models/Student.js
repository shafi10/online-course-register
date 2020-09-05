const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    sId:{
     type:String,
     required:true
    },
    name:{
        type:String,
        required:true
    },
    sYear:{
        type:String,
        required:true
    }
})

const Student = model('Student' , studentSchema)

module.exports = Student;