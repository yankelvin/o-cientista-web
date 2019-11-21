import axios from "axios";

const api = axios.create({
  baseURL: "https://yankelvin.pythonanywhere.com/api/"
});

export default api;
