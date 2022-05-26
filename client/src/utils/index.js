import axios from 'axios'

export const network = axios.create({
    baseURL: 'http://localhost:8080',
    responseType: "json"
})