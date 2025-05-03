import { useState } from 'react'
import InputField from '../components/InputField'
import { useNavigate } from 'react-router-dom'
import { validateLoginForm } from '../utils/validators'
import { toast } from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateLoginForm({ email, password })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    login()
    toast.success('Login successful! 🎉')
    navigate('/home')
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
      </form>
    </div>
  )
}

export default Login
