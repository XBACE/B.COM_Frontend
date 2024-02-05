import { FormControl, Button, Link } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
//import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '../../componets/AuthLayout'
import {  RegisterSchema } from './validationSchema'
//import { useRegisterMutation } from "services/reducers/auth/authApiSlice";
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'

const RegisterPage = () => {
  //const navigation = useNavigate()
  //const [register, { isLoading }] = useRegisterMutation();

  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleClickshowConfirmPassword = () => setShowConfirmPassword(show => !show)

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      console.log(values)
      // const response = await register(value);
      // if ("data" in response) {
      //   navigation("/login");
      //   actions.resetForm();
      // } else {
      //   console.error("Error occurred:", response?.error);
      // }
    }
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    formik.handleSubmit()
  }
  return (
    <AuthLayout
      title="Create Account"
      image="/register.svg"
      google="Signup with Google"
      onSubmit={onSubmit}
    >
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel htmlFor="firstname">First name</InputLabel>
        <Input
          value={formik.values.firstname}
          onChange={formik.handleChange}
          name="firstname"
          id="firstname"
          type="text"
        />
      </FormControl>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel htmlFor="lastname">Last name</InputLabel>
        <Input
          value={formik.values.lastname}
          onChange={formik.handleChange}
          name="lastname"
          id="lastname"
          type="text"
        />
      </FormControl>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          name="email"
          type="email"
        />
      </FormControl>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl> 
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel htmlFor="password">Confirm password</InputLabel>
        <Input
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          id="confirmPassword"
          name="confirmPassword"
          type={showConfirmPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickshowConfirmPassword}
                edge="end"
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        disabled={!(formik.isValid && formik.dirty)}
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          marginTop: 5,
          width: '100%',
          borderRadius: 10,
          textTransform: 'capitalize'
        }}
      >
        {/* {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}*/}Create Account
      </Button>
      <p className="text-center mt-3">
        Already have an account? <Link href="/login"> click here</Link>
      </p>
    </AuthLayout>
  )
}

export default RegisterPage
