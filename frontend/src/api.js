import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fleetflow-production-35d9.up.railway.app/api',
});

// x-user-email and x-user-role are set in App.jsx on login
export default api;