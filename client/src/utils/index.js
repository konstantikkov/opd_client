import axios from 'axios'

export const network = axios.create({
    baseURL: '/api',
    responseType: "json"
})