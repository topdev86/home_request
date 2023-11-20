import axios from 'axios'

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to request headers
axiosInstance.interceptors.request.use((config) => {
  return config
})

export default axiosInstance
