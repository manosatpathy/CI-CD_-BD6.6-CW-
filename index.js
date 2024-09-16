const express = require('express');
const cors = require('cors');
const app = express();
const { getAllEmployees, getEmployeeById } = require('./controllers');

// Exercise 1: Retrieve All Employees
app.get('/employees', async (req, res) => {
  const employees = getAllEmployees();
  return res.status(200).json({ employees });
});

// Exercise 2: Retrieve Employee by ID
app.get('/employees/details/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const employee = getEmployeeById(id);
  return res.status(200).json({ employee });
});

module.exports = { app };
