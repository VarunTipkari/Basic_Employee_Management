import React from 'react';
import {
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Groups,
  Dashboard,
  Home,
  Settings,
  BarChart
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const features = [
    {
      icon: <Groups fontSize="large" color="primary" />,
      title: "Employee Management",
      description: "Easily add, view, and manage all employee records in one centralized system."
    },
    {
      icon: <BarChart fontSize="large" color="primary" />,
      title: "Powerful Analytics",
      description: "Gain insights with comprehensive reports and employee statistics."
    },
    {
      icon: <Settings fontSize="large" color="primary" />,
      title: "Customizable Settings",
      description: "Tailor the system to your organization's specific needs and workflows."
    }
  ];

  const heroImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Navigation Bar */}
      <AppBar position="sticky" sx={{ bgcolor: '#1a237e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            EMPLOYEE MANAGER
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              startIcon={<Home />}
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button
              color="inherit"
              startIcon={<Dashboard />}
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section with Background Image */}
      <Box sx={{
        position: 'relative',
        height: isMobile ? '60vh' : '80vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        px: 3,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(26, 35, 126, 0.6)'
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: isMobile ? '2.5rem' : '3.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.4)'
          }}>
            Modern Employee Management
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.95 }}>
            Streamline your HR processes with our intuitive employee management system
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/dashboard')}
              sx={{
                bgcolor: 'white',
                color: '#1a237e',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#e0e0e0'
                }
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1rem'
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" sx={{
          fontWeight: 600,
          mb: 6,
          color: 'text.primary'
        }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: theme.shadows[8]
                }
              }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{
        bgcolor: '#f5f7fa',
        py: 8,
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{
            fontWeight: 600,
            mb: 3,
            color: 'text.primary'
          }}>
            Ready to transform your HR management?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
            Join thousands of companies managing their workforce efficiently with our system
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/dashboard')}
            sx={{
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              bgcolor: '#1a237e',
              '&:hover': {
                bgcolor: '#303f9f'
              }
            }}
          >
            Start Free Trial
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{
        bgcolor: '#1a237e',
        color: 'white',
        py: 4,
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="body1">
            © {new Date().getFullYear()} Employee Manager. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
