const express = require('express');
const router = express.Router();
const path = require('path');
const dirname = path.dirname;
const PORT = process.env.PORT || 3500;
const employeesController = require('../../controllers/employeeControllers.js');

router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee)


router.route('/:id')
    .get(employeesController.getEmployee)

module.exports = router;