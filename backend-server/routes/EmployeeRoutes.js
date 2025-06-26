const express = require('express')
const router = express.Router();
const {fetchEmployees,addEmployee,deactivateEmployee} = require('../controllers/EmployeeControllers');

router.get("/employeeList",fetchEmployees);
router.post("/addEmployee",addEmployee);
router.post("/deactiveEmp",deactivateEmployee);


module.exports = router;