import axios from "axios";

const db = axios.create({
    baseURL: 'http://localhost:4000'
})

export default db