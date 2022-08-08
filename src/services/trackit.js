import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"


function createHeaders() {
    const auth = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${auth}`
        }
    };

    return config;
}


function postCadastro(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise

}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise
}


export { postCadastro, postLogin, createHeaders }