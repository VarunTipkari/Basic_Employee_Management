import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetEmployeeDetails,updateDetails } from '../api/api';
import {
  Box,
  Button,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Container,
  TextField,
  MenuItem,
  Divider,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

const Update = () => {
  const { employeeId } = useParams();
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let response = await GetEmployeeDetails({ EmployeeID: employeeId });
        response.DOB = response.DOB.substring(0,10);
        setEmployeeData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [employeeId]);

  useEffect(() => {
    if (employeeData) {
      reset(employeeData);
      setLoading(false);
    }
  }, [employeeData, reset]);

  const onSubmit = async (data) => {
    try {
      await updateDetails(data);
      alert("Employee details updated!")
      navigate(`/Profile/${employeeId}`)
    } catch (error) {
      console.error('Update failed', error);
      setSnack({ open: true, message: 'Failed to update employee.', severity: 'error' });
    }
  };

  const departments = ['Engineering', 'Sales and Marketing', 'HR', 'Account', 'IT'];

  return (
    <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#1a237e', mb: 4 }}>
        <Toolbar>
          <Button startIcon={<ArrowBack />} sx={{ color: '#ffffff', mr: 2 }} onClick={() => navigate(`/Profile/${employeeId}`)}>
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 500 }}>
            Update Employee
          </Typography>
          <Divider sx={{ mb: 4 }} />

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
              <CircularProgress />
            </Box>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Section */}
              <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  {...register('FirstName', { required: 'First name is required' })}
                  error={!!errors.FirstName}
                  helperText={errors.FirstName?.message}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  {...register('LastName', { required: 'Last name is required' })}
                  error={!!errors.LastName}
                  helperText={errors.LastName?.message}
                />
              </Box>

              {/* Personal Info Section */}
              <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  variant="outlined"
                  {...register('DOB', { required: 'Date of birth is required' })}
                  error={!!errors.DOB}
                  helperText={errors.DOB?.message}
                />
                <TextField
                  fullWidth
                  label="Gender"
                  select
                  variant="outlined"
                  defaultValue= {employeeData.Gender}
                  {...register('Gender', { required: 'Gender is required' })}
                  error={!!errors.Gender}
                  helperText={errors.Gender?.message}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Box>

              {/* Contact Info Section */}
              <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  {...register('Email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  error={!!errors.Email}
                  helperText={errors.Email?.message}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  {...register('Phone', { required: 'Phone is required' })}
                  error={!!errors.Phone}
                  helperText={errors.Phone?.message}
                />
              </Box>

              {/* Address Section */}
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label="Address"
                  variant="outlined"
                  multiline
                  rows={3}
                  {...register('Address', { required: 'Address is required' })}
                  error={!!errors.Address}
                  helperText={errors.Address?.message}
                />
              </Box>

              {/* Department Section */}
              <Box sx={{ mb: 4 }}>
                <TextField
                  fullWidth
                  label="Department"
                  select
                  variant="outlined"
                  defaultValue= {employeeData.Department}
                  {...register('Department', { required: 'Department is required' })}
                  error={!!errors.Department}
                  helperText={errors.Department?.message}
                >
                  {departments.map((dept) => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <Divider sx={{ mb: 3 }} />

              {/* Form Actions */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" color="primary" sx={{ px: 4 }} onClick={() => navigate('/Profile')}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary" sx={{ px: 4 }}>
                  Update Employee
                </Button>
              </Box>
            </form>
          )}
        </Paper>
      </Container>

      <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack({ ...snack, open: false })}>
        <Alert severity={snack.severity} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Update;
