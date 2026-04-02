import axios from 'axios';

// Get base URL from environment variables, fallback to local if not set
export const API_ROOT = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/api$/, '') : 'http://localhost:5000';
export const BASE_URL = `${API_ROOT}/api`;

const api = axios.create({
    baseURL: BASE_URL,
});

// x-user-email and x-user-role are set in App.jsx on login
export default api;