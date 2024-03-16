const mongoose = require('mongoose')
const live_url ='mongodb+srv://a4avnishmishra:avnish123@cluster0.nr3nuc7.mongodb.net/admission_portal?retryWrites=true&w=majority&appName=Cluster0'
const local_url = 'mongodb://127.0.0.1:27017/admission_portal'

const connectDB = ()=>{
    return mongoose.connect(live_url)
    .then(()=>{
        console.log('connected successfully')
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDB