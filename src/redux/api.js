import axios from "axios";


const API_URL = "https://679432165eae7e5c4d90ef6c.mockapi.io/contacts";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
