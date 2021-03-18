import axios from 'axios'

axios.create({
  baseURL: process.env.API_URL ?? '',
  headers: {
    'Content-Type': 'application/json',
  },
})

export * from 'axios'
export { axios }
