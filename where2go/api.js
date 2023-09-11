import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.15:8080/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;