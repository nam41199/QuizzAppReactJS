import axios from 'axios';

export function registerAccount(user) {
    return axios.post(` https://fwa-ec-quiz.herokuapp.com/v1/auth/register`,user)
        .then((response) => response.data);
}

export function loginAccount(user) {
    return axios.post(`  https://fwa-ec-quiz.herokuapp.com/v1/auth/login`,user)
        .then((response) => response.data);
}

export function getQuestion() {
    return axios.get(` https://fwa-ec-quiz.herokuapp.com/v1/questions/`)
         .then((response) => response.data);
}
