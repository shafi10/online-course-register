const {Schema, model} = require('mongoose')

const courseSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    students:[{
        student:{
            type:Schema.Types.ObjectId,
            ref:'students'
        },
        name:{
          type:String,
          required:true
        },
        sId:{
            type:String,
            required:true
        }
    }],
    teachers:[
        {
            teacher:{
                type:Schema.Types.ObjectId,
                ref:'teachers'
            },
            tId:{
               type:String,
               required:true  
            },
            name:{
                type:String,
                required:true
            }
        }
    ]
})

const Course = model('Course' , courseSchema)

module.exports = Course