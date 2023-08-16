import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api', // Set the base URL here
});

export default api;