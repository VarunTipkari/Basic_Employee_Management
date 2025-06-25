const express = require('express')
const router = express.Router();
const {fetchEmployees,addEmployee} = require('../controllers/EmployeeControllers');

router.get("/employeeList",fetchEmployees);
router.post("/addEmployee",addEmployee);


module.exports = router;