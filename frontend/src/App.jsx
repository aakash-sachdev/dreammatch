import { Route, Routes } from 'react-router-dom'
import IntroScreen from './components/IntroScreen'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
