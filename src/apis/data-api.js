import axios from 'axios';

export function registerAccount(user) {
    return axios.post(` https://fwa-ec-quiz.herokuapp.com/v1/auth/register`,user)
        .then((response) => response.data);
}

export function loginAccount(user) {
    return axios.post(`  https://fwa-ec-quiz.herokuapp.com/v1/auth/login`,user)
        .then((response) => response.data);
}

export function getQuestion(number) {
    return axios.get(` https://fwa-ec-quiz.herokuapp.com/v1/questions/?limit=${number}`)
         .then((response) => response.data);
}

export function submitAnswer(answer) {
    return axios.post(` https://fwa-ec-quiz.herokuapp.com/v1/questions/submit`,answer)
        .then((response) => response.data);
}

export function getQuestionAdmin(page,limit) {
    return axios.get(` https://fwa-ec-quiz.herokuapp.com/v1/questions/edit?limit=${limit}&page=${page}`)
         .then((response) => response.data);
}

export function createQuestion(q) {
    return axios.post(` https://fwa-ec-quiz.herokuapp.com/v1/questions/edit`,q)
        .then((response) => response.data);
}

export function deleteQuestionById(id) {
    return axios.delete(` https://fwa-ec-quiz.herokuapp.com/v1/questions/edit/${id}`)
         .then((response) => response.data);
}