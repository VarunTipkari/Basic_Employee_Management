const Employee = require('../models/Employee')
const mongoose = require('mongoose')

const fetchEmployees = async (req,res) => {
    try{
        const employees = await Employee.find({Status: true});
        if(!employees){
            return res.status(404).json({message:"Employees not found!"});
        }
        res.json(employees);

    }catch(error){
        console.log("Error fetching employees:" ,error);
        res.status(500).json({message:"Server error!"});
    }
}

const addEmployee = async (req,res) => {
    const {FirstName,LastName,DOB,Gender,Email,Phone,Address,Department} = req.body;
    try{
        const new_Employee = await Employee.create({FirstName,LastName,DOB,Gender,Email,Phone,Address,Department,Status : true});
        res.status(201).json({
            message : "Employee Added!"
        })
    }catch(error){
        console.log("Error adding employee:" ,error);
        res.status(500).json({message:"Server error!"});
    }
}

const deactivateEmployee = async (req,res) => {
    const {EmployeeID} = req.body; 
    try{
        const result = await Employee.findOneAndUpdate({_id:EmployeeID},{$set : {Status : false}},{new:true});
        res.json(result);
    }catch(error){
        console.log("Error changing status:" ,error);
        res.status(500).json({message:"Server error!"});
    }
}

const employeeDetails = async (req,res) => {
    const {EmployeeID} = req.query;
    try{
        const response = await Employee.findOne({_id : EmployeeID});
        res.json(response);
    }catch(error){
        console.log("Error fetching details : ",error);
        res.status(500).json({message: "Server error!"});
    }
}

const updateEmployee = async (req,res) => {
    try{
        const response =  await Employee.findOneAndReplace({_id : req.body._id},req.body);
        res.status(201).json({
            message : "Employee Updated!"
        })
    }catch(error){
        console.log("Error updating employee:" ,error);
        res.status(500).json({message:"Server error!"});
    }
}

module.exports = {fetchEmployees,addEmployee,deactivateEmployee,employeeDetails,updateEmployee};