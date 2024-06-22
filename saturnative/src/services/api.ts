import axios from "axios";

const api = axios.create({
    baseURL: 'https://6676ea51145714a1bd732d33.mockapi.io/'
})

export default api;