import * as Yup from 'yup'
import { ForgotPasswordSchemaT, LoginSchemaT, RegisterSchemaT, ResetPasswordSchemaT } from '../../types'

export const LoginSchema: Yup.ObjectSchema<LoginSchemaT> = Yup.object().shape({
  email: Yup.string().required('Email must be provided'),
  password: Yup.string().required('Password is required')
})

export const RegisterSchema: Yup.ObjectSchema<RegisterSchemaT> = Yup.object().shape({
  firstname: Yup.string().required('First name must be provided'),
  lastname: Yup.string().required('Last name must be provided'),
  email: Yup.string().required('Email must be provided'),
  password: Yup.string()
    .matches(
      /^(?:(?=.*[A-Z])(?=.*[a-z])|(?=.*[A-Z])(?=.*\d)|(?=.*[A-Z])(?=.*[\W_])|(?=.*[a-z])(?=.*\d)|(?=.*[a-z])(?=.*[\W_])|(?=.*\d)(?=.*[\W_])).{8,}$/,
      'Password should be at least 8 digits long and include, at least 2 different character types (uppercase letter, lowercase letter, number, special characters).'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required')
})

export const ForgotPasswordSchema: Yup.ObjectSchema<ForgotPasswordSchemaT> = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be a valid one')
    .required('Required')
})

export const ResetPasswordSchema: Yup.ObjectSchema<ResetPasswordSchemaT> = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?:(?=.*[A-Z])(?=.*[a-z])|(?=.*[A-Z])(?=.*\d)|(?=.*[A-Z])(?=.*[\W_])|(?=.*[a-z])(?=.*\d)|(?=.*[a-z])(?=.*[\W_])|(?=.*\d)(?=.*[\W_])).{8,}$/,
      'Password should be at least 8 digits long and include , at least 2 different character types (upper case letter, lower case letter, number, special characters).'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required')
})
