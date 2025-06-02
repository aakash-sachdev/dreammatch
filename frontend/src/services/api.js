import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const signupUser = (userData) => API.post('signup', userData)
export const loginUser = (userData) => API.post('login', userData)
export const getUserProfile = (email) =>
  API.get('profile', { params: { email } })
