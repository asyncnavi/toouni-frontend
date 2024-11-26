import axios from 'axios';
import Cookies from 'js-cookie';
const BASE_URL = 'http://localhost:8080/api';

const client = axios.create({ baseURL: BASE_URL, withCredentials: true });

const authorizedClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

authorizedClient.interceptors.request.use(
    (config) => {
        const token = Cookies.get('Authorization');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

export { BASE_URL, client, authorizedClient };
