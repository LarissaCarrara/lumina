import axios from 'axios';

const prodURL = "";
const devURL = "http://localhost:8000/api";

const api = axios.create({
    baseURL: devURL,
});

export default api;