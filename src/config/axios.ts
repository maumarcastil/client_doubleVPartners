import axios from 'axios';
import { VITE_API_URL } from './enviroments';

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

export default axiosInstance;