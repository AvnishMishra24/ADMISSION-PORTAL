const mongoose = require('mongoose')


const CourseSchema = new mongoose.Schema({
    user_id:{
        type:String,
        Requiured:true
    },
    name:{
        type:String,
        Requiured:true
    },
    email:{
        type:String,
        Requiured:true
    },
    mobile:{
        type:String,
        Requiured:true
    },
    address:{
        type:String,
        Requiured:true
    },
    gender:{
        type:String,
        Requiured:true
    },
    college:{
        type:String,
        Requiured:true
    },
    branch:{
        type:String,
        Requiured:true
    },
    course:{
        type:String,
        Requiured:true
    }

},{timestamps:true})

const CourseModel = mongoose.model('courses',CourseSchema)
module.exports=CourseModel

