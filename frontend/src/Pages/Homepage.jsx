import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
  Avatar,
  Chip,
  AppBar,
  Toolbar,
  Container
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { format } from 'date-fns';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GetEmployeeList } from '../api/api';

const Homepage = () => {
  // Sample employee data
  const [employees, setEmployees] = useState();
  const [loading,setLoading] = useState(true);

  const handleRowClick = (employeeId) => {
    console.log('Employee clicked:', employeeId);
    // Navigate to detail view or open edit modal
  };

  const handleAddEmployee = () => {
    console.log('Add new employee clicked');
    // Open add employee modal or navigate to form
  };

  useEffect(()=>{
    const fetchEmployees = async ()=> {
      try{
        const data = await GetEmployeeList();
        setEmployees(data);
      }catch(error){
        console.log(error);
      }
    }

    fetchEmployees();
  });

  useEffect(()=>{
    if(employees != null){
        setLoading(false);
    }
  });

  return (
    <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#1a237e', mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<Add />}
            onClick={handleAddEmployee}
            sx={{ 
              backgroundColor: '#ffffff',
              color: '#1a237e',
              '&:hover': {
                backgroundColor: '#e0e0e0'
              }
            }}
          >
            Add Employee
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 2 }}>
          {/* Employee Table */}
          <Table sx={{ minWidth: 650 }} aria-label="employee table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
                <TableCell>Name</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Department</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { loading ? console.log("loading") : employees.map((employee) => (
                <TableRow
                  key={employee._id}
                  onClick={() => handleRowClick(employee._id)}
                  hover
                  sx={{ 
                    cursor: 'pointer',
                    '&:last-child td, &:last-child th': { border: 0 }
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: '#1a237e' }}>
                        {employee.FirstName.charAt(0)}{employee.LastName.charAt(0)}
                      </Avatar>
                      <Typography>
                        {employee.FirstName} {employee.LastName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{format(employee.DOB, 'MM/dd/yyyy')}</TableCell>
                  <TableCell>{employee.Gender}</TableCell>
                  <TableCell>{employee.Email}</TableCell>
                  <TableCell>{employee.Phone}</TableCell>
                  <TableCell>{employee.Address}</TableCell>
                  <TableCell>
                    <Chip 
                      label={employee.Department} 
                      sx={{ 
                        backgroundColor: '#bbdefb',
                        color: '#0d47a1'
                      }} 
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Empty state */}
          {employees == [] && (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: 200 
            }}>
              <Typography variant="body1" color="text.secondary">
                No employees found. Click "Add Employee" to get started.
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Homepage;