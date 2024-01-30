import React from 'react'
import { AuthLayout } from '../../componets/AuthLayout'
import { FormControl, Button} from '@mui/material'
import { useFormik } from 'formik'
// import { useLoginMutation } from "../../services/reducers/auth/authApiSlice";
// import { setUserCredentials } from "../../services/slices/authSlice";
//import { useNavigate } from 'react-router-dom'
import { ForgotPasswordSchema } from './validationSchema'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'

function ForgotPasswordPage() {
  //const dispatch = useDispatch();
  //const navigation = useNavigate()
  //const [login, { isLoading }] = useLoginMutation();
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values) => {
      console.log(values)
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
    <AuthLayout title="Forgot password" image="/forgot.svg" onSubmit={onSubmit}>
      <p className="mb-5 text-center text-[#6F6F6F]">
        Please enter your email to receive a reset link. If this email is in our system, you will be
        sent an email with instruction to reset your password. Please also check your spam folder.
      </p>
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
        {/* {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"} */}Send link
      </Button>
    </AuthLayout>
  )
}

export default ForgotPasswordPage
