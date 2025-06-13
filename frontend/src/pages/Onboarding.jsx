import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { uploadImage, submitUserProfile } from '../services/api'
import Navbar from '../components/Navbar'
import { toast } from 'react-hot-toast'

function Onboarding() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    bio: '',
    preferences: '',
  })

  const [selectedFile, setSelectedFile] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let profileImageUrl = ''

      if (selectedFile) {
        const imageData = new FormData()
        imageData.append('file', selectedFile)

        const imageRes = await uploadImage(imageData)

        const profileImageUrl = imageRes.data

        const profilePayload = {
          ...formData,
          profileImageUrl,
        }

        await submitUserProfile(user.email, profilePayload)

        toast.success('Profile created successfully!')
        navigate('/profile')
      }
    } catch (err) {
      console.error('Onboarding failed', err)
      toast.error('Something went wrong')
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="max-w-xl mx-auto mt-10 p-6 bg-slate-800 rounded shadow">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6">
          Complete Your Profile 💫
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-700"
            required
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-700"
          />
          <input
            type="text"
            name="preferences"
            placeholder="Preferences (e.g., music, reading)"
            value={formData.preferences}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-700"
          />
          <textarea
            name="bio"
            placeholder="Short Bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-2 rounded bg-slate-700"
            rows="3"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 bg-slate-700"
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
          >
            Submit Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default Onboarding
