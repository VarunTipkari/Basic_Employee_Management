import React from 'react';
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
  Divider
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

const AddEmp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Employee added:', data);
    // Handle form submission
  };

  const departments = [
    'Engineering',
    'Sales and Marketing',
    'HR',
    'Account',
    'IT'
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      {/* App Bar - Matches the demo exactly */}
      <AppBar position="static" sx={{ backgroundColor: '#1a237e', mb: 4 }}>
        <Toolbar>
          <Button 
            startIcon={<ArrowBack />}
            sx={{ 
              color: '#ffffff',
              mr: 2
            }}
          >
            Back
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 500 }}>
            Add New Employee
          </Typography>
          <Divider sx={{ mb: 4 }} />

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Section */}
            <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                {...register("firstName", { required: 'First name is required' })}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                {...register("lastName", { required: 'Last name is required' })}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Box>

            {/* Personal Info Section */}
            <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                {...register("dob", { required: 'Date of birth is required' })}
                error={!!errors.dob}
                helperText={errors.dob?.message}
              />
              <TextField
                fullWidth
                label="Gender"
                select
                variant="outlined"
                {...register("gender", { required: 'Gender is required' })}
                error={!!errors.gender}
                helperText={errors.gender?.message}
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
                {...register("email", { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                {...register("phone", { required: 'Phone is required' })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
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
                {...register("address", { required: 'Address is required' })}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            </Box>

            {/* Department Section */}
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label="Department"
                select
                variant="outlined"
                {...register("department", { required: 'Department is required' })}
                error={!!errors.department}
                helperText={errors.department?.message}
              >
                {departments.map((dept) => (
                  <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                ))}
              </TextField>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Form Actions */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button 
                variant="outlined" 
                color="primary"
                sx={{ px: 4 }}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                sx={{ px: 4 }}
              >
                Save Employee
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default AddEmp;