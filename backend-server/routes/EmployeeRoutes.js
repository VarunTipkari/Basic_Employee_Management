const express = require('express')
const router = express.Router();
const {fetchEmployees,addEmployee,deactivateEmployee,employeeDetails,updateEmployee} = require('../controllers/EmployeeControllers');

router.get("/employeeList",fetchEmployees);
router.post("/addEmployee",addEmployee);
router.post("/deactiveEmp",deactivateEmployee);
router.get("/profile",employeeDetails);
router.post("/update",updateEmployee)


module.exports = router;