import { Link } from 'react-router-dom'

function IntroScreen() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-900 text-center px-4">
      <h1 className="font-heading text-4xl font-bold text-indigo-400 drop-shadow-pink-400 mb-4">
        DreamMatch: Built Under Progress! ❤️‍🔥
      </h1>
      <p className="text-lg font-sans text-indigo-200 max-w-xl">
        DreamMatch is built to help you find meaningful connections — not just
        likes.
      </p>

      <div className="mt-8 space-x-4">
        <Link
          to="/signup"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default IntroScreen
