import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api.tuntasinaja.id'
})

export default Api