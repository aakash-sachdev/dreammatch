import { useState } from 'react'
import InputField from '../components/InputField'
import { useNavigate } from 'react-router-dom'
import { validateSignupForm } from '../utils/validators'
import { toast } from 'react-hot-toast'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('')
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  function checkPasswordStrength(pwd) {
    if (pwd.length < 6) return 'Weak'
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd) && pwd.length >= 8)
      return 'Strong'
    return 'Medium'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', { name, email, password })

    const validationErrors = validateSignupForm({ name, email, password })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    toast.success('Signup successful! 🎉')
    navigate('/home')
  }

  return (
    <div className="h-screen flex justify-center items-center bg-slate-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-heading mb-6 text-indigo-400">Sign up</h2>

        <InputField
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

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
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setPasswordStrength(checkPasswordStrength(e.target.value))
          }}
          required
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        {password && (
          <p
            className={`text-sm font-semibold mt-1 ${
              passwordStrength === 'Weak'
                ? 'text-red-500'
                : passwordStrength === 'Medium'
                  ? 'text-yellow-400'
                  : 'text-green-400'
            }`}
          >
            Password Strength: {passwordStrength}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded font-semibold transition duration-300 ease-in-out mt-5"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default Signup
