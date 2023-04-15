const mongoose = require('mongoose') ;
const JobScehma = new mongoose.Schema({
    company : {
        type : String , 
        required : [true , 'Please Provide company name'] ,
        maxlength : 50 
    },
    position : {
        type : String ,
        required : [true , 'Please Provide Position name'] ,
        maxlength : 100 
    }, 
    status : {
        type : String , 
        enum : ['interview' , 'declined' , 'pending'] ,
        default : 'pending' ,
    } ,
    createdBy : {
        type : mongoose.Types.ObjectId ,
        ref : 'User' ,
        required : [true , 'Please provide user']
    }
} , {timestamps : true })

module.exports = mongoose.model('Job' , JobScehma);
