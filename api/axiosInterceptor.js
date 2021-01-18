import Cookies from 'js-cookie'

const axios = require('axios')
const axiosApiInstance = axios.create({
  baseURL: `${process.env.apiUrl}`
})

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const token = await Cookies.get('token')
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    return config
  },
  (error) => {
    Promise.reject(error).then((r) => {
      console.error(r)
    })
  }
)

export default axiosApiInstance
