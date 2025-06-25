import React, { useState } from 'react';
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

const Homepage = () => {
  // Sample employee data
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      dob: new Date(1990, 5, 15),
      gender: 'Male',
      email: 'john.doe@example.com',
      phone: '555-123-4567',
      address: '123 Main St, Anytown, USA',
      department: 'Engineering'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      dob: new Date(1985, 8, 22),
      gender: 'Female',
      email: 'jane.smith@example.com',
      phone: '555-987-6543',
      address: '456 Oak Ave, Somewhere, USA',
      department: 'Marketing'
    },
    {
      id: 3,
      firstName: 'Robert',
      lastName: 'Johnson',
      dob: new Date(1978, 2, 10),
      gender: 'Male',
      email: 'robert.j@example.com',
      phone: '555-456-7890',
      address: '789 Pine Rd, Nowhere, USA',
      department: 'Sales'
    }
  ]);

  const handleRowClick = (employeeId) => {
    console.log('Employee clicked:', employeeId);
    // Navigate to detail view or open edit modal
  };

  const handleAddEmployee = () => {
    console.log('Add new employee clicked');
    // Open add employee modal or navigate to form
  };

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
              {employees.map((employee) => (
                <TableRow
                  key={employee.id}
                  onClick={() => handleRowClick(employee.id)}
                  hover
                  sx={{ 
                    cursor: 'pointer',
                    '&:last-child td, &:last-child th': { border: 0 }
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: '#1a237e' }}>
                        {employee.firstName.charAt(0)}{employee.lastName.charAt(0)}
                      </Avatar>
                      <Typography>
                        {employee.firstName} {employee.lastName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{format(employee.dob, 'MM/dd/yyyy')}</TableCell>
                  <TableCell>{employee.gender}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>{employee.address}</TableCell>
                  <TableCell>
                    <Chip 
                      label={employee.department} 
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
          {employees.length === 0 && (
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