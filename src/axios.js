import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:5000"
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTM2MDFhMGM1N2QxYjliNGRkYjNlMCIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjc5NTA5NjYyLCJleHAiOjE2Nzk1MTY4NjJ9.vz5AA-jOXFLfO0XmXUXLzNhlKxMZ0tCQTWIGqJDS-v8"
  return config
})

export default instance