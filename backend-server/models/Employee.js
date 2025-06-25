const mongoose = require('mongoose')

const EmployeeSchema =  new mongoose.Schema({
    FirstName : {type : String,required:true},
    LastName : {type : String,required:true},
    DOB : {type: Date,required:true},
    Gender : {type : String,required:true},
    Email : {type : String,required:true,unique : true},
    Phone : {type : Number,required:true,unique : true},
    Address : {type : String,required:true},
    Department : {type: String,required:true},
    Status : {type: Boolean,required:true} 
});

module.exports = mongoose.model("Employee",EmployeeSchema);

