import React from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Auth({ register }) {

  const isRegisterForm = register ? true : false

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div className='main-container d-flex align-items-center justify-content-center'>
      {
        isRegisterForm ?
          <div className='auth-container shadow'>
            <h4 className='mt-5 text-black text-center'>Create your account</h4>
            <div className='d-flex flex-column align-items-center justify-content-center'>
              <TextField className='input mt-4 mb-3' id="Outlined" label="Username" variant="outlined" />
              <TextField className='input mt-2 mb-3' id="Outlined" label="Email" variant="outlined" />
              <FormControl variant="outlined" className='input mt-2'>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
            <div className='login-btn mt-4 px-4 py-3'>
              <Link to={'/login'} className='btn btn-info px-3'>Create</Link>
            </div>

            <div className='d-flex align-items-center justify-content-center w-100 px-5'>
                <span className='text-white mx-3'>OR</span>
            </div>

            <div className='d-flex align-items-center justify-content-center px-4 py-3'>
              <div className='google-btn'>
                  <img width={'25px'} height={'25px'} src="/images/google-icon.png" alt="google-icon" />
                  <span className='mx-auto'>Sign in with Google</span>
              </div>
            </div>
            
            <p className='px-5 py-3 text-dark text-center'>Already have Account? Click here to <Link to={'/login'} className='text-info auth-link fw-bold'>Sign In</Link></p>
          </div>
          :
          <div className='auth-container shadow'>
            <h4 className='mt-5 text-black text-center'>Sign In to your account</h4>
            <div className='d-flex flex-column align-items-center justify-content-center'>
              <TextField className='input mt-5' id="Outlined" label="Email" variant="outlined" />
              <FormControl variant="outlined" className='input mt-4'>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
            <div className='login-btn mt-3 px-4 py-3'>
              <Link to={'/'} className='btn btn-info px-3'>Login</Link>
            </div>

            <div className='d-flex align-items-center justify-content-center w-100 px-5'>
                <span className='text-white mx-3'>OR</span>
            </div>

            <div className='d-flex align-items-center justify-content-center px-4 py-3'>
              <div className='google-btn'>
                  <img width={'25px'} height={'25px'} src="/images/google-icon.png" alt="google-icon" />
                  <span className='mx-auto'>Sign in with Google</span>
              </div>
            </div>

            <p className='px-5 py-4 text-dark text-center'>New User? Click here to <Link to={'/register'} className='auth-link text-info fw-bold'>Sign Up</Link></p>
          </div>
      }

    </div>
  )
}

export default Auth