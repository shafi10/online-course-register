const {Schema, model} = require('mongoose');

const teacherSchema = new Schema({
    tId:{
     type:String,
     required:true
    },
    name:{
        type:String,
        required:true
    }
})

const Teacher = model('Teacher' , teacherSchema)

module.exports = Teacher;