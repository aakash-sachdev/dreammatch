import { useState } from 'react'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', { name, email, password })
  }

  return (
    <div className="h-screen flex justify-center items-center bg-slate-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-heading mb-6 text-indigo-400">Sign up</h2>

        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-slate-700 text-white"
          required
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-slate-700 text-white"
          required
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-slate-700 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded font-semibold transition duration-300 ease-in-out"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default Signup
