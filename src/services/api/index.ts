import axios from 'axios'

import config from '@config'

axios.interceptors.request.use((request) => {
  request.baseURL = config.api
  return request
})

axios.interceptors.response.use(response => response, (error) => {
  throw {
    status: error.response ? error.response.status : 500,
    message: error.response ? error.response.data.message : 'Server error - Please try again later',
  }
})

const updateAuthHeader = () => {
  axios.interceptors.request.use((request) => {
    const token = localStorage.getItem('token')
    return {
      ...request,
      baseURL: config.api,
      headers: token ? {
        Authorization: `Bearer ${token}`,
      }
      : undefined,
    }
  })
}

export const updateToken = (token?: string | null) => {
  if (token) {
    localStorage.setItem('token', token)
    updateAuthHeader()
  } else {
    localStorage.removeItem('token')
    updateAuthHeader()
  }
}
