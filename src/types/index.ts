export interface AuthState {
  id: number | null
  username: string | null
  email: string | null
  role: string | null
  accessToken: string | null
}

export interface LoginSchemaT {
  email: string
  password: string
}

export interface RegisterSchemaT {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmPassword: string
}

export interface ForgotPasswordSchemaT {
  email: string
}

export interface ResetPasswordSchemaT {
  password: string
  confirmPassword: string
}
