import axios from "axios";

const api = axios.create({
    baseURL: "http://172.18.9.181:5000",
});
    
export default api;