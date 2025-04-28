import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Proper logout logic later
    navigate('/login')
  }

  return (
    <nav className="flex justify-between items-center bg-slate-800 p-4">
      <div
        className="text-2xl font-bold text-indigo-400 cursor-pointer"
        onClick={() => navigate('/home')}
      >
        DreamMatch
      </div>

      <div className="flex gap-4 items-center">
        <button
          className="text-white hover:text-indigo-400 font-semibold"
          onClick={() => navigate('/profile')}
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded font-semibold transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
