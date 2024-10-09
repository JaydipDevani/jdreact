import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Checkbox, FormControlLabel } from '@mui/material';

const Signin_up = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: '',
    mobile: '',
    address: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography style={{fontSize:"26px",fontWeight:"700"}} className='text-center mb-2 jost'>Welcome to Tupppereat  👋</Typography>
        <Typography variant="h4" component="h1" className='text-center' gutterBottom>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </Typography>
        <form onSubmit={isSignIn ? handleSignIn : handleSignUp}>
          {!isSignIn && (
              <>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                name="name"
                value={inputValues.name}
                onChange={handleInputChange}
                InputProps={{
                  style: { borderColor: inputValues.name ? 'black' : '' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: inputValues.name ? 'black' : '',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
              <TextField
                label="Mobile Number"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                name="mobile"
                value={inputValues.mobile}
                onChange={handleInputChange}
                InputProps={{
                  style: { borderColor: inputValues.mobile ? 'black' : '' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: inputValues.mobile ? 'black' : '',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                name="address"
                value={inputValues.address}
                onChange={handleInputChange}
                InputProps={{
                  style: { borderColor: inputValues.address ? 'black' : '' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: inputValues.address ? 'black' : '',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
            </>
          )}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: inputValues.email ? 'black' : '',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black',
                },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: inputValues.password ? 'black' : '',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black',
                },
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                sx={{
                  '&.Mui-checked': {
                    color: 'black',
                  },
                }}
              />
            }
            label="Agree to terms and conditions"
          />
          <Button className='bg-dark' type="submit" variant="contained" color="primary" fullWidth>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>
        <Typography sx={{ mt: 2 }}>
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <Button onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signin_up;
