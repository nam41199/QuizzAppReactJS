import axios from 'axios';

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});