import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Container,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CircularProgress
} from '@mui/material';
import {
  ArrowBack,
  Edit,
  Cake,
  Person,
  Email,
  Phone,
  Home,
  Work
} from '@mui/icons-material';
import { deactivateEmployee, GetEmployeeDetails } from '../api/api';

const Profile = () => {
  
  const [user,setUser] = useState(); 
  const Navigate = useNavigate();
  const [loading,setLoading] = useState(true);
  const [isActive, setIsActive] = useState("Active");
  const {employeeId} = useParams();

  const handleStatusToggle = async () => {
    try{
      const newUserData = await deactivateEmployee({EmployeeID : employeeId});
      alert("Employee Deactivated!");
      Navigate('/Home');
    }catch(error){

    }
  };

  useEffect(()=> {
    const fetchDetails = async () => {
      try{
          const response = await GetEmployeeDetails({EmployeeID : employeeId});
          setUser(response);
      }catch(error){
        console.log(error);
      }
    }

    fetchDetails();
  })
  
  useEffect(()=>{
    if(user != null){
      setLoading(false);
    }
  })


  const handleEdit = () => {
    Navigate(`/Update/${employeeId}`);
  };

  return (
    <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      {/* App Bar - Consistent with other components */}
      <AppBar position="static" sx={{ backgroundColor: '#1a237e', mb: 4 }}>
        <Toolbar>
          <Button 
            startIcon={<ArrowBack />}
            sx={{ color: '#ffffff', mr: 2 }}
            onClick={()=>Navigate('/Home')}
          >
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 4 }}>
          {/* Header with Status */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 3 
          }}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              Employee Profile
            </Typography>
            <Chip 
              label={isActive ? 'Active' : 'Inactive'} 
              sx={{ 
                backgroundColor: isActive ? '#4caf50' : '#f44336',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.875rem',
                px: 1.5,
                py: 0.5,
                borderRadius: '12px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }} 
            />
          </Box>
          <Divider sx={{ mb: 4 }} />

          {/* Profile Content */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            {/* Left Side - Employee Info */}
            {
              loading ? 
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
                            <CircularProgress />
                          </Box>
                           : 
              <Box sx={{ flex: 1 }}>
              {/* Employee Avatar and Name */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 3, 
                mb: 4,
                p: 2,
                backgroundColor: '#f8f9fa',
                borderRadius: '8px'
              }}>
                <Avatar sx={{ 
                  width: 100, 
                  height: 100, 
                  bgcolor: '#1a237e',
                  fontSize: '2.5rem'
                }}>
                  {user.FirstName.charAt(0)}{user.LastName.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 500 }}>
                    {user.FirstName} {user.LastName}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#555' }}>
                    {user.Department} Department
                  </Typography>
                </Box>
              </Box>

              {/* Personal Information Section */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 500, 
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Person fontSize="small" /> Personal Information
                </Typography>
                <List dense sx={{ 
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  py: 0
                }}>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Cake fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`Date of Birth: ${user.DOB.substring(0,10)}`} 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Person fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`Gender: ${user.Gender}`} 
                    />
                  </ListItem>
                </List>
              </Box>

              {/* Contact Information Section */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 500, 
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Email fontSize="small" /> Contact Information
                </Typography>
                <List dense sx={{ 
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  py: 0
                }}>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Email fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`Email: ${user.Email}`} 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Phone fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`Phone: ${user.Phone}`} 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Home fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`Address: ${user.Address}`} 
                    />
                  </ListItem>
                </List>
              </Box>

              {/* Employment Details Section */}
              <Box>
                <Typography variant="h6" sx={{ 
                  fontWeight: 500, 
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Work fontSize="small" /> Employment Details
                </Typography>
                <List dense sx={{ 
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  py: 0
                }}>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Work fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <span>Department: </span>
                          <Chip 
                            label={user.Department} 
                            size="small"
                            sx={{ 
                              ml: 1,
                              backgroundColor: '#bbdefb',
                              color: '#0d47a1'
                            }} 
                          />
                        </Box>
                      } 
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
            }

            {/* Right Side - Action Buttons */}
            <Box sx={{ 
              width: '220px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<Edit />}
                onClick={handleEdit}
                sx={{ 
                  py: 1.5,
                  backgroundColor: '#1a237e',
                  '&:hover': {
                    backgroundColor: '#303f9f'
                  }
                }}
              >
                Edit Profile
              </Button>
              <Button
                fullWidth
                variant="contained"
                onClick={handleStatusToggle}
                sx={{ 
                  py: 1.5,
                  backgroundColor: isActive ? '#f44336' : '#4caf50',
                  '&:hover': {
                    backgroundColor: isActive ? '#d32f2f' : '#388e3c'
                  }
                }}
              >
                {isActive ? 'Deactivate' : 'Activate'} Employee
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;