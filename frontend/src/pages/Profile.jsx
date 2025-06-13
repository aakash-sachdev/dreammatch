import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { getUserProfile } from '../services/api'
import { useAuth } from '../context/AuthContext'

function Profile() {
  const { user } = useAuth()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getUserProfile(user.email)
        setProfile(response.data)
      } catch (err) {
        console.error('Failed to fetch profile', err)
      }
    }
    if (user?.email) fetchProfile()
  }, [user?.email])

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center items-center">
        {profile ? (
          <>
            <h1 className="text-4xl font-bold mb-4  text-indigo-400">
              {' '}
              Welcome, {profile?.name}!💘
            </h1>
            <p className="text-lg text-indigo-200"> Email: {profile?.email} </p>
          </>
        ) : (
          <p className="text-4xl font-bold mb-4  text-indigo-400">
            Loading profile...
          </p>
        )}
      </main>
    </div>
  )
}

export default Profile
