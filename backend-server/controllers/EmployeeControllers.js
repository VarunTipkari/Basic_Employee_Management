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

module.exports = {fetchEmployees,addEmployee};