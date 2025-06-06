import { useState } from 'react'
import InputField from '../components/InputField'
import { Link, useNavigate } from 'react-router-dom'
import { validateLoginForm } from '../utils/validators'
import { toast } from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'
import { loginUser } from '../services/api'

function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validateLoginForm({ email, password })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const response = await loginUser({ email, password })
      const { name, email: safeEmail } = response.data
      login({ name, email: safeEmail })
      toast.success('Login Successful !')
      navigate('/home')
    } catch (error) {
      toast.error(error.response?.data || 'Login failed')
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-slate-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-heading mb-6 text-indigo-400">Login</h2>

        <InputField
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <InputField
          label="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded font-semibold transition duration-300 ease-in-out mt-5"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-300 mt-4">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-indigo-400 hover:underline hover:text-indigo-300 transition duration-200"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
