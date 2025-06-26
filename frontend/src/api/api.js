import axios from 'axios'

const BACKEND_URI = 'http://localhost:5001/api';

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