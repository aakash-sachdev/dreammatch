import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // lazy initializer
    try {
      const savedUser = localStorage.getItem('user')

      if (!savedUser || savedUser === 'undefined') return null

      return JSON.parse(savedUser)
    } catch (error) {
      console.error('Invalid user data in localStorage', error)
      return null
    }
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const login = (userData) => setUser(userData)
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook
export function useAuth() {
  return useContext(AuthContext)
}
