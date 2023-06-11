import axios from 'axios';

const clienteFetch = axios.create({
    baseURL: "http://localhost:3000/api/",
    headres: {
        "Content-Type": "application/json",
    },
})

export default clienteFetch;