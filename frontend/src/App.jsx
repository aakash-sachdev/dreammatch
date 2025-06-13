import { Route, Routes } from 'react-router-dom'
import IntroScreen from './components/IntroScreen'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import Onboarding from './pages/Onboarding'

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/onboarding"
        element={
          <ProtectedRoute>
            {' '}
            <Onboarding />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
