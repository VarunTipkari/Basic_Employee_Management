import axios from 'axios'
require('dotenv').config();

const BACKEND_URI = process.env.BACKEND_URI;

export const GetEmployeeList = async () => {
    try{
        const response = await axios.get(`${BACKEND_URI}/employeeList`,{
            method : "GET"
        });
        return response.data;
    }catch(error){
        console.error("Error fetching employee list!",error);
        throw error;
    }
}

export const AddEmployee = async (data) => {
    try{
        const response = await axios.post(`${BACKEND_URI}/addEmployee`,data,{
            method : "POST"
        });
        console.log("Employee added succesfully!");
        return response.data;
    }catch(error){
        console.error("Error adding employee!",error);
        throw error;
    }
}

export const GetEmployeeDetails = async (data) => {
    try{
        const response = await axios.get(`${BACKEND_URI}/profile`,{
            method : "GET",
            params : data
        });
        return response.data;
    }catch(error){
        console.error("Error fetching profile details :",error);
        throw error;
    }
}

export const deactivateEmployee = async (data) => {
    try{
        const response = await axios.post(`${BACKEND_URI}/deactiveEmp`,data,{
            method : "POST"
        })
        return response.data;
    }catch(error){
        console.error("Error deactivating user :",error);
        throw error;
    }
}

export const updateDetails = async (data) => {
    try{
        const response = await axios.post(`${BACKEND_URI}/update`,data,{
            method : "POST"
        });
        return response.data;
    }catch(error){
        console.error("Error updating : ", error);
        throw error;
    }
}