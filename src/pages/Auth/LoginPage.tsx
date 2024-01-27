import React from 'react'
import { AuthLayout } from '../../componets/AuthLayout'
import { FormControl, TextField, Button, CircularProgress, Link } from '@mui/material'
import { useFormik } from 'formik'
// import { useLoginMutation } from "../../services/reducers/auth/authApiSlice";
// import { setUserCredentials } from "../../services/slices/authSlice";
import { useNavigate } from 'react-router-dom'
import { LoginSchema } from './validationSchema'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'

function LoginPage() {
  //const dispatch = useDispatch();
  const navigation = useNavigate()
  //const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = React.useState(false)
  console.log(showPassword)
  const handleClickShowPassword = () => setShowPassword(showPassword => !showPassword)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: async (value, actions) => {
      // const response = await login(value);
      // if ("data" in response) {
      //   const { accessToken } = response?.data;
      //   dispatch(setUserCredentials(accessToken));
      //   navigation("/");
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
    <AuthLayout title="Login" image="/login.svg" google="Login with Google" onSubmit={onSubmit}>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel htmlFor="password">Email</InputLabel>
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
          type="text"
        />
      </FormControl>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
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
      <Link href="forgot-password" className="flex flex-row-reverse pt-2">
        Forgot password?
      </Link>
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
        {/* {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"} */}Login
      </Button>
      <p className="text-center mt-3">
        You don’t have an account? <Link href="/register"> click here</Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage
